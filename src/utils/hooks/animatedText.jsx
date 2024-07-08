import useIntersectionObserver from './useIntersectionObserver';
import PropTypes from 'prop-types';

const AnimatedText = ({
  children,
  initialStyles = { opacity: 0, transform: 'translateY(50px)' },
  animatedStyles = { opacity: 1, transform: 'translateY(0)' },
  transition = 'all 0.8s ease',
  options,
  ...props
}) => {
  const [ref, isIntersecting] = useIntersectionObserver(options);

  return (
    <div
      ref={ref}
      style={{
        ...initialStyles,
        ...(isIntersecting ? animatedStyles : {}),
        transition,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

AnimatedText.propTypes = {
  children: PropTypes.node.isRequired,
  initialStyles: PropTypes.object,
  animatedStyles: PropTypes.object,
  transition: PropTypes.string,
  options: PropTypes.object,
};

export default AnimatedText;
