// axios 패키지 가져오기
import axios from 'axios'
// Lodash 패키지에서 uniqBy 가져오기
import _uniqBy from 'lodash/uniqBy'
import { storeKey } from 'vuex'

export default {
  // module
  namespaced : true, 
  // data
  state : () => ({
    movies:[],
    message:'Search for the movie title!',
    loading:false // 기본값이 false로 loading이 되고 있지 않은 상태
  }),
  // computed
  getters : {},
  // methods(변이) : 관리하는 데이터를 변경시킬 수 있다.
  mutations : {
    updateState(state, payload){
      // {'movies', 'mesage', 'loading'}
      Object.keys(payload).forEach(key=>{
        state[key]=payload[key]
      })
    },
    resetMovies(state){
      state.movies = []
    }
  },
  // 그 외 나머지 메소드
  actions : {
    async searchMovies({ state, commit }, payload){
      // loading이 true일 때, 
      if (state.loading) return 
    
      // 데이터 수정
      commit('updateState',{
        message:'', // 검색 시에 제일 처음에는 기본 메시지는 없는 메시지로
        loading:true // 검색이 시작되면, loading이 True, 검색이 완료되면 종료가 되어야 한다.
      })
      try{
      // const { title, type, number, year } = payload 
      const res = await _fetchMovie({
        ...payload,
        page:1
      })
      const { Search, totalResults } = res.data
      commit('updateState',{
        movies: _uniqBy(Search,'imdbID')
      })
      
      console.log(totalResults) // frozen 검색시 268 => 27페이지
      console.log(typeof totalResults) // string

      // 2. string 타입을 int 타입으로 형변환한다.
      const total = parseInt(totalResults, 10) // 10진법의 정수로 형변환
      const pageLength = Math.ceil(total / 10) // 올림 처리 => 총 페이지 개수

      // 3. 추가 요청 전송 - 조건 처리
      if ( pageLength > 1){
        for (let page=2; page <= pageLength; page+=1){
          // 4. number의 종류 [10,20,30]
          // number가 10이면, 2>1 이 되고,  break
          if (page > (payload.number / 10) ) break
          
          // 3-1. 추가 요청이므로, page는 ${page}로 할당한다.
          const res = await _fetchMovie({
            ...payload,
            page:page // page로 생략이 가능하다. 
          })
          // 3-3. Search라는 데이터에 할당
          const { Search } = res.data
          // uniqBy 적용
          commit('updateState',{
            movies:[
              ...state.movies, 
              ..._uniqBy(Search,'imdbID')
            ]
          })
        }
      }
      }catch (message){
        commit('updateState',{
          movies:[],
          message:message
        })
      } finally{
        commit('updateState',{
          loading:false // 검색이 완료가 됐으므로, fasle로 마무리한다.
        })
      }
    }
  }
 }
// 현재 파일 내부에서만 사용 : _ 
 function _fetchMovie(payload){
  const {title, type, year, page} = payload
  const OMDB_API_KEY = '7035c60c'
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
  
  // 비동기 동작
  return new Promise( (resolve, reject)=>{  
    axios.get(url)
      .then((res)=>{
        if (res.data.Error){
          reject(res.data.Error)
        }
        resolve(res)
      })
      .catch((err)=>{
        reject(err.message)
      })

  })

}
