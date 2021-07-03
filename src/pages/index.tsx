import type { NextPage } from 'next';

// import ImageUpload from '../features/imageUpload';
// import ImageDownload from '../features/imageDownload';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* <ImageUpload /> */}
				{/* <ImageDownload /> */}
      </main>

      <footer className="flex items-center justify-center w-full h-20 border-t">
        <a
          className="flex items-center justify-center font-medium"
          href="https://github.com/HappyJayXin/picture-editing-tool"
          target="_blank"
          rel="noopener noreferrer"
        >
					Copyright © 2021 Picture Editing Tool by HappyJayXin.
        </a>
      </footer>
    </div>
  );
};

export default IndexPage;
