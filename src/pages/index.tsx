import yayJpg from '../assets/yay.jpg';
import BraftEditor from 'braft-editor';

// BraftEditor 是一个esm格式的对象 不符合期望
console.log('%c [ BraftEditor ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', BraftEditor)

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
