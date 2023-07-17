import React from 'react'
import { Link } from 'react-router-dom'


export default function MIniFooter() {
    return (
        <>
            <footer className='container-fluid footer-bg full-pad ' id='mini-footer' >
                <div className=''>
                    <div className="row row-3 p-0">
                        <div className="col1">
                            <div>
                                <img className='pe-1' src={require('../img/asset 23.png')} />
                                <img className='pe-1' src={require('../img/asset 24.png')} />
                                <img className='pe-1' src={require('../img/asset 25.png')} />
                                <img className='pe-1' src={require('../img/asset 26.png')} />

                                <select data-placeholder="Select Language" name="country" className='lan-input'>
                                    <option value="Afrikaans" disabled selected>Select Language</option>
                                    <option value="Afrikaans">Afrikaans</option>
                                    <option value="Albanian">Albanian</option>
                                    <option value="Arabic">Arabic</option>
                                    <option value="Armenian">Armenian</option>
                                    <option value="Basque">Basque</option>
                                    <option value="Bengali">Bengali</option>
                                    <option value="Bulgarian">Bulgarian</option>
                                    <option value="Catalan">Catalan</option>
                                    <option value="Cambodian">Cambodian</option>
                                    <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                                    <option value="Croatian">Croatian</option>
                                    <option value="Czech">Czech</option>
                                    <option value="Danish">Danish</option>
                                    <option value="Dutch">Dutch</option>
                                    <option value="English">English</option>
                                    <option value="Estonian">Estonian</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finnish">Finnish</option>
                                    <option value="French">French</option>
                                    <option value="Georgian">Georgian</option>
                                    <option value="German">German</option>
                                    <option value="Greek">Greek</option>
                                    <option value="Gujarati">Gujarati</option>
                                    <option value="Hebrew">Hebrew</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Hungarian">Hungarian</option>
                                    <option value="Icelandic">Icelandic</option>
                                    <option value="Indonesian">Indonesian</option>
                                    <option value="Irish">Irish</option>
                                    <option value="Italian">Italian</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Javanese">Javanese</option>
                                    <option value="Korean">Korean</option>
                                    <option value="Latin">Latin</option>
                                    <option value="Latvian">Latvian</option>
                                    <option value="Lithuanian">Lithuanian</option>
                                    <option value="Macedonian">Macedonian</option>
                                    <option value="Malay">Malay</option>
                                    <option value="Malayalam">Malayalam</option>
                                    <option value="Maltese">Maltese</option>
                                    <option value="Maori">Maori</option>
                                    <option value="Marathi">Marathi</option>
                                    <option value="Mongolian">Mongolian</option>
                                    <option value="Nepali">Nepali</option>
                                    <option value="Norwegian">Norwegian</option>
                                    <option value="Persian">Persian</option>
                                    <option value="Polish">Polish</option>
                                    <option value="Portuguese">Portuguese</option>
                                    <option value="Punjabi">Punjabi</option>
                                    <option value="Quechua">Quechua</option>
                                    <option value="Romanian">Romanian</option>
                                    <option value="Russian">Russian</option>
                                    <option value="Samoan">Samoan</option>
                                    <option value="Serbian">Serbian</option>
                                    <option value="Slovak">Slovak</option>
                                    <option value="Slovenian">Slovenian</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="Swahili">Swahili</option>
                                    <option value="Swedish ">Swedish </option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Tatar">Tatar</option>
                                    <option value="Telugu">Telugu</option>
                                    <option value="Thai">Thai</option>
                                    <option value="Tibetan">Tibetan</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Turkish">Turkish</option>
                                    <option value="Ukrainian">Ukrainian</option>
                                    <option value="Urdu">Urdu</option>
                                    <option value="Uzbek">Uzbek</option>
                                    <option value="Vietnamese">Vietnamese</option>
                                    <option value="Welsh">Welsh</option>
                                    <option value="Xhosa">Xhosa</option>
                                </select>
                            </div>
                        </div>

                        <div className="col2">
                            <div>
                                <span>Visit No.: </span>
                            </div>
                        </div>
                    </div>

                    <div className="row row-3">
                        <div className="col1">
                            <div className=''>
                                <Link to="https://www.facebook.com/Mukhioverseas/" className='me-3'>
                                    <img src={require('../img/asset 20.png')} />
                                </Link>
                                <Link to="https://www.linkedin.com/in/mukhi-overseas-7b8a14190">
                                    <img src={require('../img/asset 21.png')}></img>
                                </Link>
                            </div>
                        </div>

                        <div className="col2 general-link">
                            <div className=''>
                                <Link to="/">Home</Link>|
                                <Link to="/about">About Us</Link>|
                                <Link to="/product">Product</Link>|
                                <Link to="/contact">Contact Us</Link>|
                                <Link to="/">Equiry</Link>|
                                <Link to="/" className='pe-2'>Site Map</Link>
                                <Link to="http://www.mukhioverseas.com/products.rss" className='p-0'>
                                    <img src={require('../img/asset 22.png')} alt="" />
                                </Link>
                            </div>
                        </div>                        
                    </div>
                </div>

                <div className="row row-3">
                    <div className="col1">
                        <div className='t-center'>
                            Mukhi Overseas <br />
                            Developed & Managed By Weblink.in Pvt.Ltd
                        </div>
                    </div>

                    <div className="col2 ">
                        <div className=''>
                            <img src={require('../img/asset 31.png')} alt="" />
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}
