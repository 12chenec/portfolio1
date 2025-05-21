import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 220px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #c-path {
      }
      #star {
      }
      #light {
        opacity: 0.8;
      }
      #C1 {
        opacity: 1;
      }
      #C2 {
        opacity: 1;
      }
      #p1,
      #p2,
      #p3,
      #p4 {
        transform-origin: center center;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    const path = anime.path('#c-path');

    anime({
      targets: '#logo #C1',
      delay: 1400,
      clipPath: ['inset(0 0 50% 100%)', 'inset(0 0 30% 0%)'],
      duration: 480,
      easing: 'easeInQuart',
    });
    anime({
      targets: '#logo #C2',
      delay: 1880,
      clipPath: ['inset(50% 100% 0 0)', 'inset(50% 0% 0 0)'],
      duration: 450,
      easing: 'easeOutQuart',
    });

    anime({
      targets: ['#logo #star', '#logo #light'],
      delay: 800,
      translateX: path('x'),
      translateY: path('y'),
      duration: 1500,
      easing: 'easeInOutQuart',
    });

    anime({
      targets: '#logo #light',
      delay: 400,
      scale: [0, 1.5],
      duration: 800,
      easing: 'easeOutQuad',
    });

    const pTimeline = anime.timeline();

    pTimeline
      .add({
        targets: ['#logo #p1', '#logo #p2', '#logo #p3', '#logo #p4'],
        scale: [0, 1],
        delay: anime.stagger(50, { start: 300 }), // stagger if you want, or use same delay
        duration: 700,
        easing: 'easeOutQuad',
      })
      .add({
        targets: ['#logo #p1', '#logo #p2', '#logo #p3', '#logo #p4'],
        scale: [1, 1.3],
        duration: 1700,
        easing: 'easeInOutQuart',
      });

    loader
      .add({
        targets: '#logo #star',
        delay: 300,
        scale: [0, 1],
        duration: 250,
        easing: 'easeInQuad',
      })
      .add({
        targets: '#logo #star',
        scale: [1, 1.5],
        duration: 550,
        easing: 'easeOutQuad',
      })
      .add({
        targets: ['#logo #star', '#logo #light'],
        scale: [1.5, 0.7],
        translateX: path('x'),
        translateY: path('y'),
        rotate: -360,
        duration: 1500,
        easing: 'easeInOutQuart',
      })
      .add({
        targets: '#logo',
        delay: 300,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
