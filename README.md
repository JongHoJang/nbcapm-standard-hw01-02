# 리액트 스탠다드 반 1-2 과제

## 요구사항
- 아래의 `App.jsx` 파일을 `Header.jsx`, `Content.jsx`, `Footer.jsx` 세 개의 파일로 분리하세요.
- 분리한 후, `Header` 컴포넌트로 `title` props를 전달하여 제목을 설정하세요.
- `Footer` 컴포넌트로 `year` props를 전달하여 연도를 설정하세요.

```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <p>Welcome to my website!</p>
      <footer>© 2024 My Website</footer>
    </div>
  );
}

export default App;
```
