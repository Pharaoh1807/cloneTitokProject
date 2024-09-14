import { useEffect, useState } from 'react';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsis,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignIn,
    faSignOut,
    faSpinner,
    faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assests/images/logo.svg';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '../Popper/Menu';
import Upload from '~/pages/Upload';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'VietNamese' },
                { type: 'language', code: 'cn', title: 'Chinese' },
            ],
        },
    },

    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback anh help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcut' },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //Handel Logic
    const handelMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/#hoaaa' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get Coin', to: '/coin' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Setting', to: '/Setting' },

        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images} alt="Tiktok" />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 300]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handelMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/275120863_644444006611075_4557509525829002671_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=0_KXE_X0PvAQ7kNvgH1Nk9D&_nc_ht=scontent-hkg1-1.xx&_nc_gid=AyA2_QETrEP2zH2F_N6g7Iv&oh=00_AYCIBYfNSdF6_cLDhA29UAMHs01Peu87rbZIO4t1JToalA&oe=66EB57C6"
                                alt="nguyen van A"
                                fallback="https://yt3.ggpht.com/FvguR_EYU6dx77GpV5zZLT-KwgzWUldG3XZh0vjmFe92FsMG_pdfH_ZvBfeI1iwHl8uCIeC-ZQ=s88-c-k-c0x00ffffff-no-rj"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />{' '}
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
