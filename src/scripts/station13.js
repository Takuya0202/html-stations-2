function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const text = document.getElementById('text');
  if ( e.target.checked) {
    text.style.backgroundColor = '#ff0000';
  }
  else{
    text.style.background = 'white';
  };
};
