//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },

  tap1: function(){
    wx.navigateTo({
      url: '/pages/subpage1/index',
    })
  },

  tap2:function(){
    wx.navigateTo({
      url: '/pages/subpage2/index',
    })
  },

  tap3:function(){
    wx.navigateTo({
      url: '/pages/subpage3/index',
    })
  }
})
