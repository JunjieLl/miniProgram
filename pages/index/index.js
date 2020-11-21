//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },


  tap1: function () {
    wx.switchTab({
      url: '/pages/subpage1/index',
    })
  },

  tap2: function () {
    wx.switchTab({
      url: '/pages/subpage2/index',
    })
  },

  tap3: function () {
    wx.switchTab({
      url: '/pages/subpage3/index',
    })
  }

})
