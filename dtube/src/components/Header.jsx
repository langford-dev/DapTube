import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarSvg from "../components/AvatarSvg";

const Header = () => {
    const [showSearchPanel, setShowSearchPanel] = useState(false)
    const [query, setQuery] = useState()

    const cancelSearch = () => {
        setQuery('')
        setShowSearchPanel(false)
    }

    return (
        <div>
            <header>
                <div className="header-wrapper flex-between">
                    <Link to='/home' className='color-span'>
                        <h1>DapTube⚡️</h1>
                    </Link>

                    <div className="search-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

                        <input value={query} onChange={e => setQuery(e.target.value)} onClick={() => setShowSearchPanel(true)} type="search" placeholder='Search for video' />

                        {
                            showSearchPanel ?
                                <b className='cancel-btn' onClick={cancelSearch}>Cancel</b>
                                : null
                        }
                    </div>

                    <div className="flex-between">
                        <Link to='/upload' className="btn-filled">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="24" height="24" viewBox="0 0 24 24"><path d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z" /></svg>
                            Upload
                        </Link>
                        <div className="space-20"></div>
                        <div className="avatar" dangerouslySetInnerHTML={{ __html: AvatarSvg }} ></div>
                    </div>
                </div>
            </header>

            {
                showSearchPanel ?
                    <div className="search-container-wrapper">
                        <div className="search-container"></div>
                    </div>
                    : null
            }
        </div>
    );
}

export default Header
