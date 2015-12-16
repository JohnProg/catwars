// - Show next image after voting
// - Don't show the same image a user has voted on
// - Eventual database
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var CatWars = React.createClass({
  getInitialState: function() {
    return {
      catImage: null,
    };
  },

  componentDidMount: function() {
    this.grabCatImage();
  },

  render: function() {
    if (!this.state.catImageName) {
      return this.renderLoadingView();
    }

    return this.showCatImage(this.state.catImageName);
  },

  grabCatImage: function() {
    var catImageNames = ['0IsZ8BU.png','0p5Tk.png','104.png','106.png','1297064511_11.png','130621-1.png','130621-10.png','130621-11.png','130621-13.png','130621-14.png','130621-15.png','130621-16.png','130621-17.png','130621-18.png','130621-19.png','130621-2.png','130621-20.png','130621-21.png','130621-22.png','130621-23.png','130621-24.png','130621-25.png','130621-26.png','130621-27.png','130621-28.png','130621-29.png','130621-30.png','130621-31.png','130621-32.png','130621-33.png','130621-34.png','130621-35.png','130621-36.png','130621-37.png','130621-38.png','130621-39.png','130621-4.png','130621-40.png','130621-41.png','130621-42.png','130621-43.png','130621-44.png','130621-45.png','130621-46.png','130621-5.png','130621-6.png','130621-8.png','130621-9.png','1CMcYdw.png','1PTHCxL.png','1jBVUH6.png','2rnkVem.png','2zlsCtT.png','3RrI27q.png','3TBbkAI.png','3m9mDSc.png','48ZKv7z.png','4Lr91PM.png','4SUrRgI.png','4eBFz3H.png','4ktMZmK.png','4xbtagT.png','5FqSMgP.png','5NrgZ.png','5OXfA.png','5XvIP1O.png','67tz7fc.png','69JzURg.png','6JXspBg.png','6KTwWXe.png','6SY938q.png','74.png','92.png','9LBAOVu.png','9MavB70.png','9cv0ptk.png','9dyNYk8.png','9ic9G6Q.png','9jtWxpw.png','A-blue-striped-fabric-cat-tube-with-a-ginger-and-white-cat-sitting-next-to-it.png','A5bru.png','B6QVL.png','BBJLce1.png','BPdS15f.png','CMH8aZ.png','Cat-boop-scare-reaction.png','Cat-bounces-away.png','Cat-thumbs-up-pose-fail.png','Cj3mY.png','DSDKE6T.png','DWI3Z.png','DecisiveWarpedIceblueredtopzebra.png','Dfrh4fp.png','Djpe8py.png','E3EpuH8.png','EKn8qgv.png','EYyO2.png','EbwB2h3.png','EvqMX3u.png','FPIQ1C4.png','FwmY8uL.png','G45PBn1.png','GRXwYxU.png','H5U8L4X.png','HPOIdtK.png','HTGME7T.png','HoafQMn.png','ISmKv7K.png','Iw8qtBm.png','JCsbE75.png','JXmH2.png','JgYDo.png','JmSQ3.png','K6txhaW.png','KUxIZqh.png','Kf3Q8pT.png','Kf9io01.png','Kitten-climbs-traffic-cop.png','Lazy-cat-drops.png','LklWApl.png','LmNx6FD.png','MCmdIbF.png','MSy46jE.png','MbnEUSq.png','N36mMWf.png','Ni22HTS.png','NwG30eW.png','O6cdSGr.png','Ohx0uq7.png','OunWx.png','OzYtPtA.png','PFqQD9D.png','PMUGTe3.png','PhX8iy9.png','Q8oM6ka.png','QKprztH.png','QMegCxP.png','QaZw3N2.png','R6GjSoL.png','R8bilvn.png','Ral9z07.png','S9SoAA2.png','SNETkOb.png','Sbdxjly.png','T6GoqlE.png','TZKUBLl.png','TlNc1ZW.png','U2fyFkH.png','UC1XbYM.png','UTEJUXc.png','UV8z0sv.png','UVXVntm.png','UcQIgiH.png','UzMAeW4.png','VkKCiae.png','Vq5i391.png','VssVE.png','VwrcrPx.png','W8qSG3J.png','WHKA2jx.png','WprboMC.png','X95W.png','X9F04xz.png','XNt9IUj.png','XPKZ.png','XgSDwJH.png','Y98Qkig.png','YcPGKlL.png','Z4dXj6Y.png','ZFY42sY.png','aL48gx1.png','anigif_enhanced-buzz-10181-1323295518-9.png','anigif_enhanced-buzz-10181-1323295598-12.png','anigif_enhanced-buzz-10181-1323295701-15.png','anigif_enhanced-buzz-12799-1366466337-4.png','anigif_enhanced-buzz-12805-1366466197-1.png','anigif_enhanced-buzz-12810-1366465643-2.png','anigif_enhanced-buzz-13671-1364482817-26.png','anigif_enhanced-buzz-16494-1323295767-10.png','anigif_enhanced-buzz-18591-1364484021-2.png','anigif_enhanced-buzz-19072-1365800933-4.png','anigif_enhanced-buzz-20629-1364482971-11.png','anigif_enhanced-buzz-26857-1364481357-6.png','anigif_enhanced-buzz-27223-1364482168-6.png','anigif_enhanced-buzz-2749-1323295539-27.png','anigif_enhanced-buzz-27756-1364481036-6.png','anigif_enhanced-buzz-30518-1366466117-5.png','anigif_enhanced-buzz-3107-1323296289-20.png','anigif_enhanced-buzz-6365-1364482677-16.png','anigif_enhanced-buzz-6732-1364481906-7.png','anigif_enhanced-buzz-8018-1364484334-17.png','anigif_enhanced-buzz-9366-1364481525-1.png','anigif_enhanced-buzz-9518-1323296240-13.png','away.png','backup.png','basement_cat_denied.png','boop_sg.png','bqgAmig.png','broccoli-cat.png','c2YDP.png','c7CllhP.png','cWfx0Bc.png','cat-check.png','cat-cleaner.png','cat-deal-with-it.png','cat-humor-cats-vs-toilet-paper-gif-2.png','cat-ride.png','cat-twerk.png','cat1.png','cat_attacking_dust_buster.png','catgifpage40.png','catipad.png','catmagician.png','catrun.png','catselfscare.png','catstairs.png','cbK1mWg.png','couch-cat.png','cw9CdCm.png','d9a4438a-f47c-40cb-82a9-de7e0b434fd9.png','dEeYVwC.png','dNGcmnc.png','dolphinkissp1.png','dqPUs.png','drz31x6.png','e5da2dfb-1799-4f3d-8d2c-2020959e06c5.png','eZjUDRG.png','entrancedp1.png','ergdGvj.png','euzIOxs.png','f18d8357-19f6-4511-abcf-b4c1bf8c3a7b.png','fOyIUlu.png','fighting-cats.png','fog-fight.png','funny-animal-gifs-004-01-fish-revenge.png','funny-gfis-this-on-his-own.png','funny-gifs-bear-know-its-caturday.png','funny-gifs-big-kitty-stands-up.png','funny-gifs-cat-needs-this-balloon.png','funny-gifs-crazy-crab-cat-chasing-laser-pointer.png','funny-gifs-force-moves-on-the-cat.png','funny-gifs-the-cat-is-planning-something-evil.png','fzvOi9U.png','g1u4YZw.png','g5Dy3DR.png','gdnGfgC.png','h2ulBp7.png','h4rLHl9.png','h5dzqNf.png','hJsDx.png','i4jNJdi03TApx.png','i5UJFxj.png','i5fDIYQH00zll.png','iMeZGmUESZFsz.png','iSecMNwwpXu7k.png','ibacte3KBbQyPn.png','ibdio5Ksi3PybY.png','ibguyRVmtQx7wP.png','ibhwkvCPXL1S8L.png','ibphgiZgImHMmz.png','idABq6ngdsvO0.png','isBepqu.png','k6VVRlh.png','kXGvEK7.png','kitteh.png','kitty.png','lQqdH7l.png','marutrash.png','money-block.png','moo0BtB.png','moremarubox.png','n2f85az.png','nW22xGg.png','naFlZtr.png','neoasacatp1.png','nhpcznf.png','no-snow.png','no-strawberry-cat.png','o1D5kFB.png','oEOpxDS.png','omgacatp1.png','pFeEp.png','pY6uJGR.png','pYHsuPj.png','physicscats.png','qbedtSZ.png','que.png','r5qTs4K.png','rGI5U35.png','rdIJtBu.png','rvmMPvj.png','rzG5xgg.png','sneezelion.png','t50UyBG.png','t5RjIly.png','t5VHGck.png','tSY278o.png','the_definitive_collection_of_cat_31.png','tipincat.png','tong-cat.png','trumpcat.png','tuWGPE5.png','tumblr_lk0oxyafUr1qbhtrto1_400.png','tumblr_lk64ayaE4h1qbhtrto1_500.png','tumblr_lnii49OUGy1qg20muo1_500.png','tumblr_lp4iys5Wuq1qi1pnpo1_500.png','tumblr_lqemghdwXc1qbz2cio1_500.png','tumblr_lt0vk1HLsR1qln00mo1_400.png','tumblr_ltwi7q1LNo1qdbpouo1_250.png','tumblr_luqgtyZA6s1r4gscvo1_400.png','tumblr_lv2r5xPfox1qam4nh.png','tumblr_lvzv6jnSXf1r7075jo1_400.png','tumblr_lvzymk1Fm11qzrdsmo1_250.png','tumblr_lwohbb3KEe1qbbz7yo1_400.png','tumblr_lx6sm8P90t1r8fmc4o1_400.png','tumblr_lz0dvhxgRf1rp5nqgo1_400.png','tumblr_lzrs23ZiLu1qidarg.png','tumblr_m14mux8eCw1qdlh1io1_r1_400.png','tumblr_m17s2sZM4G1r1lkdko1_400.png','tumblr_m1a169gG0a1rqp2pno1_500.png','tumblr_m2b66lJdLA1rtbmh0o1_250.png','tumblr_m3920aGNUE1rows1to1_250.png','tumblr_m39lx9da7r1qmkkfmo2_250.png','tumblr_m39lx9da7r1qmkkfmo3_250.png','tumblr_m39lx9da7r1qmkkfmo9_250.png','tumblr_m3h4kz5Hi31rows1to1_250.png','tumblr_m3lr20w1WB1rtbmh0o1_400.png','tumblr_m3nbpcGsNj1qjwbm8o1_250.png','tumblr_m3p7m9DutI1rows1to1_250.png','tumblr_m3q76ahaLq1rows1to1_250.png','tumblr_m3wxox7WOs1rows1to1_400.png','tumblr_m3xwh7ViB81r1lkdko1_400.png','tumblr_m46nlbb6Zp1rows1to1_400.png','tumblr_m4rz1h2Lw21qdlh1io1_400.png','tumblr_m523vnba9G1qcn249o1_400.png','tumblr_m5rt7ysRtE1rtbmh0o1_250.png','tumblr_m5s1ilFT9n1rq7mkpo1_500.png','tumblr_m60mwn6w0H1rpxgkao1_500.png','tumblr_m61b7wEpyr1rows1to1_400.png','tumblr_m6jw72EeJE1qcanpw.png','tumblr_m6kgukHNoL1r2h6ioo1_400.png','tumblr_m6sk42uwVp1rows1to1_400.png','tumblr_m6yzxdUrgq1qcanpw.png','tumblr_m7826eejVA1rqz8qx.png','tumblr_m7f4xxRnnd1qfjjglo2_250.png','tumblr_m7s4bnueuA1rows1to1_400.png','tumblr_m7ttlndKcP1qcanpw.png','tumblr_m7vqc5r3PS1rows1to1_500.png','tumblr_m7xj9rIz8v1rows1to1_500.png','tumblr_m7z66kARVD1rsqhy9o1_250.png','tumblr_m8a53p6ih91rtbmh0o1_250.png','tumblr_maqtusE7sh1re3wmmo1_400.png','tumblr_mbasncPDG91qir3eco1_500.png','tumblr_mbdyx5JiDE1rozpjbo1_500.png','tumblr_mjru5rk24u1s8rwuvo1_500.png','tumblr_mkx2dxkeF51rlo9uqo4_r1_250.png','tumblr_mlfcr20QFi1qar3s3o1_500.png','tumblr_mlwtxci5PC1so450so1_400.png','tumblr_mm5bjfDbG61qdlh1io1_400.png','tumblr_mm9k5nlFO01qbyxr0o1_400.png','tumblr_muvsmybjkC1rw1wnno1_500.png','tumblr_n2dpuqbEov1toxnu4o1_400.png','tumblr_nanv4vZy6X1tgtrj3o1_400.png','u3aQCAI.png','uCFAkEV.png','uEG8ayE.png','unexpectedkitty.png','v7urSND.png','vl1i4K9.png','vtTYq6s.png','vycLr57.png','wMj9LVJr1q.png','wait-a-minute-is-that-a-balloon.png','wgQNdPb.png','wigglewiggle2.png','window-cat.png','wpbqt.png','x4Hqo8V.png','xNgpY4pwPK.png','xgPJV.png','xj5KQ.png','yawncat.png','ybTQfsp.png','yfBhB77.png','z1fLa.png','zpaPboV']

    // choose random image from array
    var catImageName = catImageNames[Math.floor(Math.random()*catImageNames.length)];

    this.setState({
      catImageName: catImageName,
    });
  },

  _upvote() {
    this.grabCatImage();
  },

  _downvote() {
    this.grabCatImage();
  },


  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading cat...
        </Text>
      </View>
    );
  },

  showCatImage: function(catImageName) {

    return (
      <View style={styles.container}>
      <Image
        source={{uri: catImageName}} 
        style={styles.catImage}
      />

      
        <Text onPress={this.grabCatImage}>Meow</Text>
        <Text>Meh</Text>
        
      </View>
    );
  },
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // where the cat lies
  catImage: {
    width: 400,
    height: 350,
    paddingBottom: 30,
  },
  // buttons used for voting
  voteContainer: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },

});

AppRegistry.registerComponent('CatWars', () => CatWars);


  // <View style={styles.rightContainer}>
        //   <Image
        //     source={require("./ios/CatWars/Images.xcassets/cats/"+catImageName+".imageset/"+catImageName+".png")}
        //     style={styles.catImage}
        //   />
        // </View>