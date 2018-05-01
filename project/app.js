App({
  onLaunch: function(){
      require('utils/sdk-v1.3.0');
      let clientID = 'a4aa4fabb145859a650c';
      wx.BaaS.init(clientID);
  }
})