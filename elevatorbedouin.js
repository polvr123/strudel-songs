setcps(95/60/4) //beats per minute, seconds per minute, beats per cycle 

stack(
  s("bd ~ sd ~ bd ~ sd ~")
  .gain(.35)
  .lpf(2500)
  .room(.25),

  s("hh*8?") //question mark is for random chance 
  .gain(.18)
  .lpf(5000)
  .pan("-.2 .2"), //moves sound left/right 

  note("c2 ~ g1 ~ a1 ~ f1 ~")
  .s("sawtooth")
  .gain(.35)
  .lpf(500)
  .release(.3),

  note("<c4 e4 g4 b4> [a3 c4 e4 g4] <f3 a3 c4 e4> [g3 b3 d4 f4]") 
  //<> means “choose one item per cycle, then move to the next item next cycle
  //[] means play as a chord 
  .s("piano")
  .gain(.28)
  .attack(.03)
  .release(1.2)
  .lpf(1000) //low pass filter, Lower number = more muffled:
  .room(.65)
  .delay(.25),

  // high melody 
  note("g4 eb4 d4 eb4")
    .s("gm_acoustic_guitar_nylon")
    .gain(.4)
    .attack(.02)//how long it takes to fade 
    .release(.35)
    .lpf(2400)
    .room(.6)
    .delay(.3)
)