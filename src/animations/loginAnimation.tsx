import React from 'react';
import gsap from 'gsap';

export const loginAnimation = (
  stringsRef: React.MutableRefObject<HTMLDivElement>,
  bubblesRef: React.MutableRefObject<HTMLDivElement>,
  mainImgRef: React.MutableRefObject<HTMLDivElement>
): void => {
  const stringElements = stringsRef.current.children[0];
  const stringsScene = stringElements.getElementsByClassName('string');

  const bubblesElements = bubblesRef.current.children[0];
  const bubblesScene = bubblesElements.getElementsByClassName('circle');

  const mainElements = mainImgRef.current.children[0];
  const mainSceneBackground = mainElements.getElementsByClassName('background');
  const mainSceneImg = mainElements.getElementsByClassName('img');
  const mainSceneImgBackground = mainElements.getElementsByClassName(
    'imgBackground'
  );

  gsap.set([stringsScene, mainSceneImg], {
    autoAlpha: 0,
  });

  gsap.set(mainSceneImgBackground, {
    scale: 0.5,
  });

  const stringsTl = gsap.timeline();
  const bubblesTl = gsap.timeline();
  const mainTl = gsap.timeline();
  stringsTl
    .to(stringsScene, { autoAlpha: 0.5 })
    .fromTo(stringsScene, { y: '-=300' }, { y: '+=300', stagger: 0.1 })
    .to(stringsScene, {
      y: '-=50',
      autoAlpha: 1,
      stagger: 0.1,
    });

  bubblesTl.fromTo(
    bubblesScene,
    { y: '-=100', opacity: 0 },
    { y: '+=100', opacity: 1, stagger: 0.2 }
  );

  mainTl
    .fromTo(mainSceneBackground, { x: '+=1200' }, { x: '-=1200' })
    .duration(1)
    .to(mainSceneImg, { autoAlpha: 1 })
    .to(mainSceneImgBackground, { scale: 1, autoAlpha: 0.3 });
};
