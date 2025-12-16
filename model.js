let emotionLexicon = {};

fetch("data/emotion_lexicon.json")
  .then(res => res.json())
  .then(data => emotionLexicon = data);

function predictEmotion(text) {
  let score = 0;
  let words = text.toLowerCase().split(/\W+/);

  words.forEach(word => {
    if (emotionLexicon[word]) {
      score += emotionLexicon[word];
    }
  });

  if (score > 3) return { label: "Positive", score };
  if (score < -3) return { label: "Negative", score };
  return { label: "Neutral", score };
}
