import type {NextPage} from 'next';

import Header from 'features/header';
import Editor from 'features/editor';

const IndexPage: NextPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Header />

    <Editor />

    <footer className="flex items-center justify-center w-full h-20 border-t">
      <a
        className="flex items-center justify-center font-medium text-indigo-600"
        href="https://github.com/HappyJayXin/picture-editing-tool"
        target="_blank"
        rel="noopener noreferrer">
        Copyright © 2021 Picture Editing Tool by HappyJayXin.
      </a>
    </footer>
  </div>
);

export default IndexPage;
