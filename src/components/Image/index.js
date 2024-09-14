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

export default Image;
