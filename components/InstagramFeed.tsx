
import React from 'react';
import { INSTAGRAM_POSTS, SHOP_INFO } from '../constants';

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#B8860B] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Follow Us</span>
            <h2 className="font-serif text-4xl text-[#18181B]">{SHOP_INFO.instagram}</h2>
          </div>
          <a 
            href={`https://instagram.com/${SHOP_INFO.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#18181B] hover:text-[#B8860B] transition-colors"
          >
            VIEW ON INSTAGRAM
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {INSTAGRAM_POSTS.map((post) => (
            <div key={post.id} className="relative aspect-square group overflow-hidden cursor-pointer">
              <img 
                src={post.imageUrl} 
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#18181B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white flex items-center space-x-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="font-bold">{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
