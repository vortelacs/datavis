import { defaultMaxListeners } from 'events';
import React, { Component } from 'react';
import styles from "../../index.css"

function Intro(){
    const introWords= ["Why", "You", "Still", "Have", "No Job"];
    return(
        <div className='h-96 bg-tahiti items-center'>
                <p
      className="mb-4 animate-pulse text-base justify-between flex text-neutral-700 dark:text-white">
      <span
        className="inline-block min-h-[1em] w-7/12 flex-auto cursor-wait bg-purple align-middle opacity-50"></span>
      <span
        className="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait  bg-purple align-middle opacity-50"></span>
      <span
        className="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait  bg-purple align-middle opacity-50"></span>
      <span
        className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait  bg-purple align-middle opacity-50"></span>
      <span
        className="inline-block min-h-[1em] w-8/12 flex-auto cursor-wait  bg-purple align-middle opacity-50"></span>
    </p>
        </div>
    );
}

export default Intro;