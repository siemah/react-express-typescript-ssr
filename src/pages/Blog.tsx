import React from 'react';
import { Link } from 'react-router-dom';

declare global {
  interface Window { __INIT__STATE__: any; }
}

export default function About(props: any) {
  let _isMouted = true;
  let _data: any[] = null!;
  if (typeof window !== 'undefined') {
    _data = window.__INIT__STATE__?.data;
    delete window.__INIT__STATE__;
  } else {
    _data = props.staticContext.state.data;
  }
  const [posts, setPosts] = React.useState<any[]>(_data || []);

  React.useEffect(
    () => {
      const _fetchInitPosts = async () => {
        try {
          const res = await fetch(`/posts`);
          const data = await res.json();
          if (_isMouted) {
            setPosts(data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      if (!_data) {
        _fetchInitPosts();
      }
      return () => {
        _isMouted = false;
      };
    },
    []
  );
  const _renderPost = () => posts.map(({ id, title, content }) => (
    <div key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  ));
  return (
    <div>
      Blog posts page
      { !posts.length && <h1>Loading ..</h1>}
      {_renderPost()}
      <Link to={'/'}>Go back to home</Link>
    </div>
  );
}
