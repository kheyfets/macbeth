var step = 0;

var descriptions = [];
descriptions[0] = "Macbeth is walking home from a victory with Banquo when they approach three Witches -- they are creepy. What does Macbeth do?";
descriptions[1] = "Macbeth is loyal to Duncan, but Lady Macbeth questions Macbeth until he finally agrees to think about murdering Duncan. Macbeth thinks to himself about the pros and cons of murdering the King as Lady Macbeth continues to taunt him. Duncan is asleep.";
descriptions[2] = "After the murder, Macbeth freaks out. Still, Banquo's prophecy about his descendants becoming king freaks Macbeth out even more. Macbeth needs to decide what to do regarding Banquo -- should Macbeth send murderers?";
descriptions[3] = "Macbeth is celebrating his new title with friends, when he see Banquo's ghost, but no one else does. Lady Macbeth tries to calm him down. Later, Macbeth heads off to consult with the witches, and they reassure him with more prophecies regarding how nothing born from a woman can harm him. Things appear to be going well, until Macduff shows up with a serious grievance: not only is Macbeth a tyrant, he also murdered Macduff's entire family. The battle begins. What does Macbeth do to Macduff?";

var description = "<span style='color: blue'>Description</span>:<br>";

function action(command) {
  addText("<span style='color: limeGreen'>" + command + "</span>");
  resetInput();
  process(command);
  scrollDown();
}

function process(command) {
  var kill = command.substring(0, 4) === "kill";
  var noKill = command === "no-kill";

  if (step == 0) {

    // If user enters "kill" + character
    if (kill) {
      if (command.substring(5).toUpperCase() === "WITCHES") {
        addText("The Witches die.");
        addText(description + "Macbeth gets crowned Thane of Cawdor and is congratulated by Banquo. He lives somewhat happily ever after with his annoying wife Lady Macbeth.");
        $("#game-input").attr("disabled", "true");
        gameOver();
        return false;
      } else if (command.toUpperCase() === "KILL") {
        addText("Must specify a character. Try again!");
      } else {
        addText("Macbeth cannot kill them. Try again!");
      }
    }

    // If user enters "no-kill"
    else if (noKill) {
      addText("The witches share the following prophecies: Macbeth will be Thane of Glamis, Cawdor, and then King of Scotland.");
      addText(description + descriptions[++step]);
    }

    // If user enters something else
    else {
      addText("Not a command. Try again!");
    }

  }

  else if (step == 1) {

    // If user enters "kill" + character
    if (kill) {
      if (command.substring(5).toUpperCase() === "DUNCAN") {
        addText("Duncan is murdered in his sleep.");
        addText(description + descriptions[++step]);
      } else if (command.toUpperCase() === "KILL") {
        addText("Must specify a character. Try again!");
      } else {
        addText("Macbeth cannot kill them. Try again!");
      }
    }

    // If user enters "no-kill"
    else if (noKill) {
      addText("Duncan is murdered in his sleep by Lady Macbeth.");
      addText(description + descriptions[++step]);
    }

    // If user enters something else
    else {
      addText("Not a command. Try again!");
    }

  }

  else if (step == 2) {

    // If user enters "kill" + character
    if (kill) {
      if (command.substring(5).toUpperCase() === "BANQUO") {
        addText("Banquo is killed by murderers, but his son, Fleance, escapes.");
        addText(description + descriptions[++step]);
      } else if (command.toUpperCase() === "KILL") {
        addText("Must specify a character. Try again!");
      } else {
        addText("Macbeth cannot kill them. Try again!");
      }
    }

    // If user enters "no-kill"
    else if (noKill) {
      addText("Lady Macbeth sends the murderers and Banquo is killed by them, but his son, Fleance, escapes.");
      addText(description + descriptions[++step]);
    }

    // If user enters something else
    else {
      addText("Not a command. Try again!");
    }

  }

  else if (step == 3) {

    // If user enters "kill" + character
    if (kill) {
      if (command.substring(5).toUpperCase() === "MACDUFF") {
        addText("Macbeth doesn't successfully kill Macduff. Instead Macduff, who was a C-section, kills Macbeth.");
        gameOver();
        return false;
      } else if (command.toUpperCase() === "KILL") {
        addText("Must specify a character. Try again!");
      } else {
        addText("Macbeth cannot kill them. Try again!");
      }
    }

    // If user enters "no-kill"
    else if (noKill) {
      addText("Macduff, who was a C-section, kills Macbeth.");
      gameOver();
      return false;
    }

    // If user enters something else
    else {
      addText("Not a command. Try again!");
    }

  }

}

function addText(text) {
  document.getElementById("game-text").innerHTML += "<br>" + text;
}

function resetInput() {
  document.getElementById("game-input").value = "";
}

function scrollDown() {
  var el = $("#game-text");
  var height = el[0].scrollHeight;
  el.scrollTop(height);
}

function getLastLine() {
  return lastLine = document.getElementById("game-text").innerHTML.substring(document.getElementById("game-text").innerHTML.lastIndexOf("<br>") + 4);
}

function gameOver() {
  addText("<span style='font-size: 18px; font-weight: bold'>Game over...</span><br><button class='btn btn-large btn-submit' onclick='resetGame()'>Play again</button>");
}

function resetGame() {
  document.getElementById("game-text").innerHTML = description + descriptions[0];
  $("#game-input").removeAttr("disabled");
  step = 0;
  characters = restoreCharacters;
}