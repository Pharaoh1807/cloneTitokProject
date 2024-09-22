import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import clasNames from 'classnames/bind';

const cx = clasNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.prototypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
