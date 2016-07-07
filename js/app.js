console.log("Document linked!")

// Associating sound clips with piano key

$(document).ready(function() {
  $('#C1').on('click', function() {
    toneC1.load();
    toneC1.play();
  });
  $('#Cs1').on('click', function() {
    toneCs1.load();
    toneCs1.play();
  });
  $('#D1').on('click', function() {
    toneD1.load();
    toneD1.play();
  })
  $('#Ds1').on('click', function() {
    toneDs1.load();
    toneDs1.play();
  })
  $('#E1').on('click', function() {
    toneE1.load();
    toneE1.play();
  })
  $('#F1').on('click', function() {
    toneF1.load();
    toneF1.play();
  })
  $('#Fs1').on('click', function() {
    toneFs1.load();
    toneFs1.play();
  })
  $('#G1').on('click', function() {
    toneG1.load();
    toneG1.play();
  })
  $('#Gs1').on('click', function() {
    toneGs1.load();
    toneGs1.play();
  })
  $('#A1').on('click', function() {
    toneA1.load();
    toneA1.play();
  })
  $('#As1').on('click', function() {
    toneAs1.load();
    toneAs1.play();
  })
  $('#B1').on('click', function() {
    toneB1.load();
    toneB1.play();
  })
  $('#C2').on('click', function() {
    toneC2.load();
    toneC2.play();
  })
  $('#Cs2').on('click', function() {
    toneCs2.load();
    toneCs2.play();
  })
  $('#D2').on('click', function() {
    toneD2.load();
    toneD2.play();
  })
  $('#Ds2').on('click', function() {
    toneDs2.load();
    toneDs2.play();
  })
  $('#E2').on('click', function() {
    toneE2.load();
    toneE2.play();
  });
});

// computer picks a note randomly
var pianoNotes = $('.key');

var sequence = [];


$('#start').on('click', function() {
  return randomPlay();
});

function randomPlay() {
  var nextNote = pianoNotes[Math.floor(Math.random() * pianoNotes.length)];
  sequence.push(nextNote);
  console.log("computer: ", sequence);
  playSequence(sequence);
}

function playEach() {
  for(var i = 0; i < sequence.length; i++) {
    var currentNote = sequence[i].id;
    // console.log("This note is ", sequence[i].id);
    setTimeOut(playEach(), 1500);
  }
}

function playNote(div) {
  $(div).addClass('play');
  $(div).triggerHandler('click');
  setTimeout(function() {
    $(div).removeClass('play');
  }, 500)
}

function playSequence(arr) {
  var index = 0;
  var interval = setInterval(function() {
    playNote(arr[index]);
    index++;
    if(index == arr.length) {
      clearInterval(interval);
    }
  }, 1000);
}

// computer's choice of note should trigger the active/pressed CSS button styling and tone load/play
var player = [];

for(var i = 0; i < pianoNotes.length; i++) {
  pianoNotes[i].addEventListener('click', function() {
    // console.log("i heard you!")
    player.push(this);
    evalPlayerInput();
  });
}

function evalPlayerInput() {
  console.log("hi")
  if(sequence.length === player.length) {
    if(isSame(sequence, player)) {
      player = [];
      randomPlay();
    }
    else {
      alert("Game over - Level: ", sequence.length);
      player = [];
    }
  }
}

function isSame(arr1, arr2) {
  for(i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
