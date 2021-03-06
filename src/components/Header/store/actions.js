/*
 * @Author: Cecil
 * @Last Modified by: Cecil
 * @Last Modified time: 2018-07-08 15:05:09
 * @Description 无
 */
'use strict'
import { api } from '@/services'
const { blockchain$blocks } = api

export default {
  fetchBlocksData ({ commit }) {
    return blockchain$blocks().then(res => {
      commit('setBlocksData', res.data)
    })
  }
}
