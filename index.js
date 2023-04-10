const textarea = document.querySelector("textarea"),
    voiceList = document.querySelector("select"),
    speechBtn = document.querySelector("button");



// In the Web Speech API, we can convert: Text-to-Speech using SpeechSynthesis, Speech-to-Text using SpeechRecognition

// We will be using the following two interfaces to convert text to speech: SpeechSynthesisUtterance has data of what text to be spoken and how it should be spoken(speed, pitch, lang, and voice).SpeechSynthesis can be used to retrieve information about voices available on the device, start and pause speech, etc.

// Properties in SpeechSynthesisUtterance
// lang: the language of the output.
// pitch: sets a pitch(the relative highness or lowness of a tone) for the output spoken words. It has a range from 0 to 2.
// rate: the speed at which the text is spoken. rate ranges from 0.1 to 10.
// text: The text to be spoken.
// voice: which voice to be used to speak.
// volume: The output volume. It ranges from 0 to 1.

// Methods in SpeechSynthesis
// speak: to start speaking the text
// getVoices: get the available voices in the system.
// pause: pause the speech
// resume: resume the speech
// cancel: cancel the speech


let synth = speechSynthesis;

