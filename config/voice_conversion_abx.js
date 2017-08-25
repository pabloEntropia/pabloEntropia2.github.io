// configure the test here
var TestConfig = {
  "TestName": "Voice Conversion Demostrations",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "https://formspree.io/pablo.alonso@upf.edu",
  "SupervisorContact": "", 
  "Testsets": [
    //    
    {
      "Name": "",
      "TestID": "feats_MMS",
      "Files": {
        "EM": "./audio/examples/Randy.mp3",
        "EF": "./audio/examples/fPop.mp3",
        "S2": "./audio/sources/a_train_01.mp3",
        "C2": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__wn_cond__timit/a_train/a_train_01_world.mp3",
        "S3": "./audio/sources/locked48_01.mp3",
        "C3": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__timit/locked/locked48_01_world.mp3",
        "S4": "./audio/sources/xevi_01.mp3",
        "C4": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__wn_cond__timit/xevi/xevi_01_world.mp3",
        "S5": "./audio/sources/ultimo-chorus_a_01.mp3",        
        "C5": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__timit/ultimo/ultimo-chorus_a_01_world.mp3",
      }
    },
    //
  ]
}
