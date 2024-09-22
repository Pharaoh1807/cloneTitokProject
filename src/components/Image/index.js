import PropTypes from 'prop-types';

import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';
import images from '~/assests/images/no-img.png';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images, ...props }, ref) => {
    const [fallback, setFullback] = useState('');
    const handleErrore = () => {
        setFullback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleErrore}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
