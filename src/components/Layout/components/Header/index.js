import { useEffect, useState } from 'react';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsis,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assests/images/logo.svg';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '../Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    { icon: <FontAwesomeIcon icon={faEarthAsia} />, tittle: 'Tiếng Việt' },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, tittle: 'Feedback anh help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, tittle: 'Keyboard shortcut' },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images} alt="Tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input spellCheck={false} placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />{' '}
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
