// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './App.css';

// const App = () => {
//     const [photos, setPhotos] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);

//     useEffect(() => {
//         fetchPhotos();
//     }, []);

//     const fetchPhotos = async () => {
//         try {
//             const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
//             setPhotos(prevPhotos => [...prevPhotos, ...res.data]);
//             if (res.data.length === 0) {
//                 setHasMore(false);
//             }
//             setPage(prevPage => prevPage + 1);
//         } catch (error) {
//             console.error("Error fetching data", error);
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Infinite Scroll Example</h1>
//             <InfiniteScroll
//                 dataLength={photos.length}
//                 next={fetchPhotos}
//                 hasMore={hasMore}
//                 loader={<h4>Loading...</h4>}
//                 endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}
//             >
//                 {photos.map(photo => (
//                     <div key={photo.id} className="photo-item">
//                         <img src={photo.thumbnailUrl} alt={photo.title} />
//                         <h2>{photo.title}</h2>
//                     </div>
//                 ))}
//             </InfiniteScroll>
//         </div>
//     );
// };

// export default App;


// after update

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './App.css';

// const App = () => {
//     const [photos, setPhotos] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);

//     useEffect(() => {
//         fetchPhotos();
//     }, []);

//     const fetchPhotos = async () => {
//         try {
//             const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
//             setPhotos(prevPhotos => [...prevPhotos, ...res.data]);
//             if (res.data.length === 0) {
//                 setHasMore(false);
//             }
//             setPage(prevPage => prevPage + 1);
//         } catch (error) {
//             console.error("Error fetching data", error);
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Infinite Scroll Example</h1>
//             <InfiniteScroll
//                 dataLength={photos.length}
//                 next={fetchPhotos}
//                 hasMore={hasMore}
//                 loader={<h4>Loading...</h4>}
//                 endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}
//             >
//                 <div className="photo-grid">
//                     {photos.map(photo => (
//                         <div key={photo.id} className="photo-item">
//                             <img src={photo.thumbnailUrl} alt={photo.title} />
//                             <h2>{photo.title}</h2>
//                         </div>
//                     ))}
//                 </div>
//             </InfiniteScroll>
//         </div>
//     );
// };

// export default App;

// Infinite Scroll

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './App.css';

// const App = () => {
//     const [photos, setPhotos] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);

//     useEffect(() => {
//         fetchPhotos();
//     }, []);

//     const fetchPhotos = async () => {
//         try {
//             const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
//             setPhotos(prevPhotos => [...prevPhotos, ...res.data]);
//             if (res.data.length === 0) {
//                 setHasMore(false);
//             }
//             setPage(prevPage => prevPage + 1);
//         } catch (error) {
//             console.error("Error fetching data", error);
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Infinite Scroll Example</h1>
//             <InfiniteScroll
//                 dataLength={photos.length}
//                 next={fetchPhotos}
//                 hasMore={hasMore}
//                 loader={<h4>Loading...</h4>}
//                 endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}
//             >
//                 <div className="photo-grid">
//                     {photos.map(photo => (
//                         <div key={photo.id} className="photo-item">
//                             <img src={photo.thumbnailUrl} alt={photo.title} />
//                             <h2>{photo.title}</h2>
//                         </div>
//                     ))}
//                 </div>
//             </InfiniteScroll>
//         </div>
//     );
// };

// export default App;

// after adding loading indicator update

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './App.css';

// const App = () => {
//     const [photos, setPhotos] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         fetchPhotos();
//     }, []);

//     const fetchPhotos = async () => {
//         setLoading(true);
//         try {
//             const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
//             setPhotos(prevPhotos => [...prevPhotos, ...res.data]);
//             if (res.data.length === 0) {
//                 setHasMore(false);
//             }
//             setPage(prevPage => prevPage + 1);
//         } catch (error) {
//             console.error("Error fetching data", error);
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="App">
//             <h1>Infinite Scroll Example</h1>
//             <InfiniteScroll
//                 dataLength={photos.length}
//                 next={fetchPhotos}
//                 hasMore={hasMore}
//                 loader={<h4>Loading...</h4>}
//                 endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}
//             >
//                 <div className="photo-grid">
//                     {photos.map(photo => (
//                         <div key={photo.id} className="photo-item">
//                             <img src={photo.thumbnailUrl} alt={photo.title} />
//                             <h2>{photo.title}</h2>
//                         </div>
//                     ))}
//                 </div>
//             </InfiniteScroll>
//             {loading && (
//                 <div className="loading-indicator">
//                     <div className="spinner"></div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;

// error Handling

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './App.css';

// const App = () => {
//     const [photos, setPhotos] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchPhotos();
//     }, []);

//     const fetchPhotos = async () => {
//         setLoading(true);
//         setError(null); // Reset error before fetching
//         try {
//             const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
//             setPhotos(prevPhotos => [...prevPhotos, ...res.data]);
//             if (res.data.length === 0) {
//                 setHasMore(false);
//             }
//             setPage(prevPage => prevPage + 1);
//         } catch (error) {
//             setError("Error fetching data. Please try again.");
//         }
//         setLoading(false);
//     };

//     const handleRetry = () => {
//         fetchPhotos();
//     };

//     return (
//         <div className="App">
//             <h1>Infinite Scroll Example</h1>
//             {error && (
//                 <div className="error-message">
//                     <p>{error}</p>
//                     <button onClick={handleRetry}>Retry</button>
//                 </div>
//             )}
//             <InfiniteScroll
//                 dataLength={photos.length}
//                 next={fetchPhotos}
//                 hasMore={hasMore}
//                 loader={<h4>Loading...</h4>}
//                 endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}
//             >
//                 <div className="photo-grid">
//                     {photos.map(photo => (
//                         <div key={photo.id} className="photo-item">
//                             <img src={photo.thumbnailUrl} alt={photo.title} />
//                             <h2>{photo.title}</h2>
//                         </div>
//                     ))}
//                 </div>
//             </InfiniteScroll>
//             {loading && (
//                 <div className="loading-indicator">
//                     <div className="spinner"></div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;

// Clean Code

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoItem from './components/PhotoItem.js';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

const App = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
            setPhotos(prevPhotos => [...prevPhotos, ...res.data]);
            if (res.data.length === 0) {
                setHasMore(false);
            }
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError("Error fetching data. Please try again.");
        }
        setLoading(false);
    };

    const handleRetry = () => {
        fetchPhotos();
    };

    return (
        <div className="App">
            <h1>Infinite Scroll Example</h1>
            {error && <ErrorMessage error={error} onRetry={handleRetry} />}
            <InfiniteScroll
                dataLength={photos.length}
                next={fetchPhotos}
                hasMore={hasMore}
                loader={<LoadingIndicator />}
                endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}
            >
                <div className="photo-grid">
                    {photos.map(photo => (
                        <PhotoItem key={photo.id} photo={photo} />
                    ))}
                </div>
            </InfiniteScroll>
            {loading && <LoadingIndicator />}
        </div>
    );
};

export default App;




