import React, { useEffect, useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineFileText, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { json } from 'react-router-dom';

export default function Top_Line() {

    const initialValues = { product: "", detail: "", username: "", email: "", mobileno: "" };
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i;
        if (!values.product) {
            errors.product = "product is required !";
        }
        else if (!values.detail) {
            errors.detail = "detail is required !";
        }
        else if (!values.username) {
            errors.username = "username is required !";
        }
        else if (!regex.test(values.email)) {
            errors.email = "email is required!";
        }
        else if (!values.mobileno) {
            errors.mobileno = "Mobile is required!";
        }
        // else if (!values.mobileno < 10){
        //     errors.mobileno = "Enter at least 10 number!";
        // }
        return errors;
    };

    return (
        <>
            <div className='top-line full-pad'>
                <div className="row top-line-space container-fluid">
                    <div className="col-md-6 col-sm-12 ">
                        <div className='d-flex f-div'>
                            <div>
                                <MdOutlineMail className='me-1 fs-5'></MdOutlineMail>
                                <span className='me-3'>mukhioverseas@gmail.com</span>
                            </div>
                            <div>
                                <FaMobileAlt className='me-1 fs-5'></FaMobileAlt>
                                <span>0856679089</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 d-flex justify-content-end px-0">
                        <div className='d-flex'>
                            {/* ------------------ mail btn ------------------------ */}
                            <div >
                                {/* <!-- Button trigger modal --> */}
                                <button type="button" class="mail-btn me-3 align-center" data-bs-toggle="modal" data-bs-target="#mail">
                                    <MdOutlineMail className='fs-6  me-1'></MdOutlineMail>SEND EMAIL
                                </button>
                                {/* <!-- Modal --> */}
                                {/* <pre className="error"> {JSON.stringify(formValues, undefined , 2)} </pre> */}
                                <form onSubmit={handleSubmit} action='index.html'>
                                    <div class="modal fade " id="mail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered justify-center">
                                            <div class="body-modal modal-content bg-gray">
                                                <div class="title-modal d-flex">
                                                    <h1 id="exampleModalLabel" className='m-auto align-center'>Send Email</h1>
                                                    <button class="close-btn" data-bs-dismiss="modal" aria-label="Close">
                                                        {/* <AiOutlineClose></AiOutlineClose> */}
                                                        <IoCloseSharp></IoCloseSharp>
                                                    </button>
                                                </div>
                                                <div class="modal-body justify-center btn1 btn-2 pb-1 ">
                                                    <div>
                                                        <div className='d-flex'>
                                                            <AiOutlineFileText className='e-icon'></AiOutlineFileText>
                                                            <input type="text" placeholder='Product/Service Looking for' className='w-100 me-2' name='product' value={formValues.product} onChange={handleChange} />
                                                        </div>
                                                        <pre className="error">{formErrors.product}</pre>
                                                        <div className='d-flex align-items-start'>
                                                            <BsFillPencilFill className='e-icon'></BsFillPencilFill>
                                                            <textarea id="" cols="30" rows="4" placeholder='Describe your requirement in detail. We will get back soon.' className='w-100 me-2' name="detail" value={formValues.detail} onChange={handleChange}></textarea>
                                                        </div>
                                                        <pre className="error">{formErrors.detail}</pre>
                                                        <div >
                                                            <AiOutlineUser className='e-icon'></AiOutlineUser>
                                                            <input type="text" placeholder='Enter Name' className='w-100 me-2' name='username' value={formValues.username} onChange={handleChange} />
                                                        </div>
                                                        <pre className="error">{formErrors.username}</pre>
                                                        <div>
                                                            <AiOutlineMail className='e-icon'></AiOutlineMail>
                                                            <input type="email" placeholder='Enter Email' className='w-100 me-2' name='email' value={formValues.email} onChange={handleChange} />
                                                        </div>
                                                        <pre className="error">{formErrors.email}</pre>
                                                        <div>
                                                            <select name="countryCode" id="" className='mx-2 w-25'>
                                                                <option value="44">+44</option>
                                                                <option value="1">USA +1</option>
                                                                <option value="213">Algeria +213</option>
                                                                <option value="376">Andorra +376</option>
                                                                <option value="244">Angola +244</option>
                                                                <option value="1264">Anguilla +1264</option>
                                                                <option value="1268">Antigua &amp; Barbuda +1268</option>
                                                                <option value="54">Argentina +54</option>
                                                                <option value="374">Armenia +374</option>
                                                                <option value="297">Aruba +297</option>
                                                                <option value="61">Australia +61</option>
                                                                <option value="43">Austria +43</option>
                                                                <option value="994">Azerbaijan +994</option>
                                                                <option value="1242">Bahamas +1242</option>
                                                                <option value="973">Bahrain +973</option>
                                                                <option value="880">Bangladesh +880</option>
                                                                <option value="1246">Barbados +1246</option>
                                                                <option value="375">Belarus +375</option>
                                                                <option value="32">Belgium +32</option>
                                                                <option value="501">Belize +501</option>
                                                                <option value="229">Benin +229</option>
                                                                <option value="1441">Bermuda +1441</option>
                                                                <option value="975">Bhutan +975</option>
                                                                <option value="591">Bolivia +591</option>
                                                                <option value="387">Bosnia Herzegovina +387</option>
                                                                <option value="267">Botswana +267</option>
                                                                <option value="55">Brazil +55</option>
                                                                <option value="673">Brunei +673</option>
                                                                <option value="359">Bulgaria +359</option>
                                                                <option value="226">Burkina Faso +226</option>
                                                                <option value="257">Burundi +257</option>
                                                                <option value="855">Cambodia +855</option>
                                                                <option value="237">Cameroon +237</option>
                                                                <option value="1">Canada +1</option>
                                                                <option value="238">Cape Verde Islands +238</option>
                                                                <option value="1345">Cayman Islands +1345</option>
                                                                <option value="236">Central African Republic +236</option>
                                                                <option value="56">Chile +56</option>
                                                                <option value="86">China +86</option>
                                                                <option value="57">Colombia +57</option>
                                                                <option value="269">Comoros +269</option>
                                                                <option value="242">Congo +242</option>
                                                                <option value="682">Cook Islands +682</option>
                                                                <option value="506">Costa Rica +506</option>
                                                                <option value="385">Croatia +385</option>
                                                                <option value="53">Cuba +53</option>
                                                                <option value="90392">Cyprus North +90392</option>
                                                                <option value="357">Cyprus South +357</option>
                                                                <option value="42">Czech Republic +42</option>
                                                                <option value="45">Denmark +45</option>
                                                                <option value="253">Djibouti +253</option>
                                                                <option value="1809">Dominica +1809</option>
                                                                <option value="1809">Dominican Republic +1809</option>
                                                                <option value="593">Ecuador +593</option>
                                                                <option value="20">Egypt +20</option>
                                                                <option value="503">El Salvador +503</option>
                                                                <option value="240">Equatorial Guinea +240</option>
                                                                <option value="291">Eritrea +291</option>
                                                                <option value="372">Estonia +372</option>
                                                                <option value="251">Ethiopia +251</option>
                                                                <option value="500">Falkland Islands +500</option>
                                                                <option value="298">Faroe Islands +298</option>
                                                                <option value="679">Fiji +679</option>
                                                                <option value="358">Finland +358</option>
                                                                <option value="33">France +33</option>
                                                                <option value="594">French Guiana +594</option>
                                                                <option value="689">French Polynesia +689</option>
                                                                <option value="241">Gabon +241</option>
                                                                <option value="220">Gambia +220</option>
                                                                <option value="7880">Georgia +7880</option>
                                                                <option value="49">Germany +49</option>
                                                                <option value="233">Ghana +233</option>
                                                                <option value="350">Gibraltar +350</option>
                                                                <option value="30">Greece +30</option>
                                                                <option value="299">Greenland +299</option>
                                                                <option value="1473">Grenada +1473</option>
                                                                <option value="590">Guadeloupe +590</option>
                                                                <option value="671">Guam +671</option>
                                                                <option value="502">Guatemala +502</option>
                                                                <option value="224">Guinea +224</option>
                                                                <option value="245">Guinea - Bissau +245</option>
                                                                <option value="592">Guyana +592</option>
                                                                <option value="509">Haiti +509</option>
                                                                <option value="504">Honduras +504</option>
                                                                <option value="852">Hong Kong +852</option>
                                                                <option value="36">Hungary +36</option>
                                                                <option value="354">Iceland +354</option>
                                                                <option value="91" selected>+91</option>
                                                                <option value="62">Indonesia +62</option>
                                                                <option value="98">Iran +98</option>
                                                                <option value="964">Iraq +964</option>
                                                                <option value="353">Ireland +353</option>
                                                                <option value="972">Israel +972</option>
                                                                <option value="39">Italy +39</option>
                                                                <option value="1876">Jamaica +1876</option>
                                                                <option value="81">Japan +81</option>
                                                                <option value="962">Jordan +962</option>
                                                                <option value="7">Kazakhstan +7</option>
                                                                <option value="254">Kenya +254</option>
                                                                <option value="686">Kiribati +686</option>
                                                                <option value="850">Korea North +850</option>
                                                                <option value="82">Korea South +82</option>
                                                                <option value="965">Kuwait +965</option>
                                                                <option value="996">Kyrgyzstan +996</option>
                                                                <option value="856">Laos +856</option>
                                                                <option value="371">Latvia +371</option>
                                                                <option value="961">Lebanon +961</option>
                                                                <option value="266">Lesotho +266</option>
                                                                <option value="231">Liberia +231</option>
                                                                <option value="218">Libya +218</option>
                                                                <option value="417">Liechtenstein +417</option>
                                                                <option value="370">Lithuania +370</option>
                                                                <option value="352">Luxembourg +352</option>
                                                                <option value="853">Macao +853</option>
                                                                <option value="389">Macedonia +389</option>
                                                                <option value="261">Madagascar +261</option>
                                                                <option value="265">Malawi +265</option>
                                                                <option value="60">Malaysia +60</option>
                                                                <option value="960">Maldives +960</option>
                                                                <option value="223">Mali +223</option>
                                                                <option value="356">Malta +356</option>
                                                                <option value="692">Marshall Islands +692</option>
                                                                <option value="596">Martinique +596</option>
                                                                <option value="222">Mauritania +222</option>
                                                                <option value="269">Mayotte +269</option>
                                                                <option value="52">Mexico +52</option>
                                                                <option value="691">Micronesia +691</option>
                                                                <option value="373">Moldova +373</option>
                                                                <option value="377">Monaco +377</option>
                                                                <option value="976">Mongolia +976</option>
                                                                <option value="1664">Montserrat +1664</option>
                                                                <option value="212">Morocco +212</option>
                                                                <option value="258">Mozambique +258</option>
                                                                <option value="95">Myanmar +95</option>
                                                                <option value="264">Namibia +264</option>
                                                                <option value="674">Nauru +674</option>
                                                                <option value="977">Nepal +977</option>
                                                                <option value="31">Netherlands +31</option>
                                                                <option value="687">New Caledonia +687</option>
                                                                <option value="64">New Zealand +64</option>
                                                                <option value="505">Nicaragua +505</option>
                                                                <option value="227">Niger +227</option>
                                                                <option value="234">Nigeria +234</option>
                                                                <option value="683">Niue +683</option>
                                                                <option value="672">Norfolk Islands +672</option>
                                                                <option value="670">Northern Marianas +670</option>
                                                                <option value="47">Norway +47</option>
                                                                <option value="968">Oman +968</option>
                                                                <option value="680">Palau +680</option>
                                                                <option value="507">Panama +507</option>
                                                                <option value="675">Papua New Guinea +675</option>
                                                                <option value="595">Paraguay +595</option>
                                                                <option value="51">Peru +51</option>
                                                                <option value="63">Philippines +63</option>
                                                                <option value="48">Poland +48</option>
                                                                <option value="351">Portugal +351</option>
                                                                <option value="1787">Puerto Rico +1787</option>
                                                                <option value="974">Qatar +974</option>
                                                                <option value="262">Reunion +262</option>
                                                                <option value="40">Romania +40</option>
                                                                <option value="7">Russia +7</option>
                                                                <option value="250">Rwanda +250</option>
                                                                <option value="378">San Marino +378</option>
                                                                <option value="239">Sao Tome &amp; Principe +239</option>
                                                                <option value="966">Saudi Arabia +966</option>
                                                                <option value="221">Senegal +221</option>
                                                                <option value="381">Serbia +381</option>
                                                                <option value="248">Seychelles +248</option>
                                                                <option value="232">Sierra Leone +232</option>
                                                                <option value="65">Singapore +65</option>
                                                                <option value="421">Slovak Republic +421</option>
                                                                <option value="386">Slovenia +386</option>
                                                                <option value="677">Solomon Islands +677</option>
                                                                <option value="252">Somalia +252</option>
                                                                <option value="27">South Africa +27</option>
                                                                <option value="34">Spain +34</option>
                                                                <option value="94">Sri Lanka +94</option>
                                                                <option value="290">St. Helena +290</option>
                                                                <option value="1869">St. Kitts +1869</option>
                                                                <option value="1758">St. Lucia +1758</option>
                                                                <option value="249">Sudan +249</option>
                                                                <option value="597">Suriname +597</option>
                                                                <option value="268">Swaziland +268</option>
                                                                <option value="46">Sweden +46</option>
                                                                <option value="41">Switzerland +41</option>
                                                                <option value="963">Syria +963</option>
                                                                <option value="886">Taiwan +886</option>
                                                                <option value="7">Tajikstan +7</option>
                                                                <option value="66">Thailand +66</option>
                                                                <option value="228">Togo +228</option>
                                                                <option value="676">Tonga +676</option>
                                                                <option value="1868">Trinidad &amp; Tobago +1868</option>
                                                                <option value="216">Tunisia +216</option>
                                                                <option value="90">Turkey +90</option>
                                                                <option value="7">Turkmenistan +7</option>
                                                                <option value="993">Turkmenistan +993</option>
                                                                <option value="1649">Turks &amp; Caicos Islands +1649</option>
                                                                <option value="688">Tuvalu +688</option>
                                                                <option value="256">Uganda +256</option>
                                                                {/* <!-Code="GB" value="44">UK +44</option> --> */}
                                                                <option value="380">Ukraine +380</option>
                                                                <option value="971">United Arab Emirates +971</option>
                                                                <option value="598">Uruguay +598</option>
                                                                {/* <!-Code="US" value="1">USA +1</option> --> */}
                                                                <option value="7">Uzbekistan +7</option>
                                                                <option value="678">Vanuatu +678</option>
                                                                <option value="379">Vatican City +379</option>
                                                                <option value="58">Venezuela +58</option>
                                                                <option value="84">Vietnam +84</option>
                                                                <option value="84">Virgin Islands - British +1284</option>
                                                                <option value="84">Virgin Islands - US +1340</option>
                                                                <option value="681">Wallis &amp; Futuna +681</option>
                                                                <option value="969">Yemen North+969</option>
                                                                <option value="967">Yemen South+967</option>
                                                                <option value="260">Zambia +260</option>
                                                                <option value="263">Zimbabwe +263</option>

                                                            </select>
                                                            <input type="text" placeholder='Mobile No.' name="mobileno" className='w-100 me-2' value={formValues.mobileno} onChange={handleChange} />
                                                        </div>
                                                        <pre className="error">{formErrors.mobileno}</pre>
                                                    </div>
                                                </div>
                                                <div class="modal-footers d-flex justify-content-center">
                                                    <button type='submit' class="theme-bg fs-5"><RiSendPlaneFill className='me-2'></RiSendPlaneFill>Send Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* ------------------ sms btn ------------------------ */}
                            <div>
                                {/* <!-- Button trigger modal --> */}
                                <button type="button" class="sms-btn mail-btn me-0 align-center" data-bs-toggle="modal" data-bs-target="#sms">
                                    <FaMobileAlt className='fs-6 me-1'></FaMobileAlt>SEND SMS
                                </button>

                                {/* <!-- Modal --> */}
                                <form action="">
                                    <div class="modal fade" id="sms" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered justify-center">
                                            <div class="body-modal modal-content bg-gray">
                                                <div class="title-modal d-flex">
                                                    <h1 id="exampleModalLabel" className='m-auto align-center font-navy-blue'>Send SMS Equiry</h1>
                                                    <button class="close-btn" data-bs-dismiss="modal" aria-label="Close">
                                                        <IoCloseSharp></IoCloseSharp>
                                                    </button>
                                                </div>
                                                <div class="modal-body justify-center btn1 py-1">
                                                    <div>
                                                        <div className='d-flex align-items-start'>
                                                            <BsFillPencilFill className='e-icon'></BsFillPencilFill>
                                                            <textarea name="" id="" cols="30" rows="4" placeholder='Describe your requirement in detail. We will get back soon.' className='w-100 me-2'></textarea>
                                                        </div>
                                                        <div >
                                                            <AiOutlineUser className='e-icon'></AiOutlineUser>
                                                            <input type="text" placeholder='Enter Name' className='w-100 me-2' />
                                                        </div>
                                                        <div>
                                                            <AiOutlineMail className='e-icon'></AiOutlineMail>
                                                            <input type="text" placeholder='Enter Email' className='w-100 me-2' />
                                                        </div>
                                                        <div>
                                                            <select name="countryCode" id="" className='c-code mx-2 w-25'>
                                                                <option value="44">UK (+44)</option>
                                                                <option value="1">USA (+1)</option>
                                                                <option value="213">Algeria (+213)</option>
                                                                <option value="376">Andorra (+376)</option>
                                                                <option value="244">Angola (+244)</option>
                                                                <option value="1264">Anguilla (+1264)</option>
                                                                <option value="1268">Antigua &amp; Barbuda (+1268)</option>
                                                                <option value="54">Argentina (+54)</option>
                                                                <option value="374">Armenia (+374)</option>
                                                                <option value="297">Aruba (+297)</option>
                                                                <option value="61">Australia (+61)</option>
                                                                <option value="43">Austria (+43)</option>
                                                                <option value="994">Azerbaijan (+994)</option>
                                                                <option value="1242">Bahamas (+1242)</option>
                                                                <option value="973">Bahrain (+973)</option>
                                                                <option value="880">Bangladesh (+880)</option>
                                                                <option value="1246">Barbados (+1246)</option>
                                                                <option value="375">Belarus (+375)</option>
                                                                <option value="32">Belgium (+32)</option>
                                                                <option value="501">Belize (+501)</option>
                                                                <option value="229">Benin (+229)</option>
                                                                <option value="1441">Bermuda (+1441)</option>
                                                                <option value="975">Bhutan (+975)</option>
                                                                <option value="591">Bolivia (+591)</option>
                                                                <option value="387">Bosnia Herzegovina (+387)</option>
                                                                <option value="267">Botswana (+267)</option>
                                                                <option value="55">Brazil (+55)</option>
                                                                <option value="673">Brunei (+673)</option>
                                                                <option value="359">Bulgaria (+359)</option>
                                                                <option value="226">Burkina Faso (+226)</option>
                                                                <option value="257">Burundi (+257)</option>
                                                                <option value="855">Cambodia (+855)</option>
                                                                <option value="237">Cameroon (+237)</option>
                                                                <option value="1">Canada (+1)</option>
                                                                <option value="238">Cape Verde Islands (+238)</option>
                                                                <option value="1345">Cayman Islands (+1345)</option>
                                                                <option value="236">Central African Republic (+236)</option>
                                                                <option value="56">Chile (+56)</option>
                                                                <option value="86">China (+86)</option>
                                                                <option value="57">Colombia (+57)</option>
                                                                <option value="269">Comoros (+269)</option>
                                                                <option value="242">Congo (+242)</option>
                                                                <option value="682">Cook Islands (+682)</option>
                                                                <option value="506">Costa Rica (+506)</option>
                                                                <option value="385">Croatia (+385)</option>
                                                                <option value="53">Cuba (+53)</option>
                                                                <option value="90392">Cyprus North (+90392)</option>
                                                                <option value="357">Cyprus South (+357)</option>
                                                                <option value="42">Czech Republic (+42)</option>
                                                                <option value="45">Denmark (+45)</option>
                                                                <option value="253">Djibouti (+253)</option>
                                                                <option value="1809">Dominica (+1809)</option>
                                                                <option value="1809">Dominican Republic (+1809)</option>
                                                                <option value="593">Ecuador (+593)</option>
                                                                <option value="20">Egypt (+20)</option>
                                                                <option value="503">El Salvador (+503)</option>
                                                                <option value="240">Equatorial Guinea (+240)</option>
                                                                <option value="291">Eritrea (+291)</option>
                                                                <option value="372">Estonia (+372)</option>
                                                                <option value="251">Ethiopia (+251)</option>
                                                                <option value="500">Falkland Islands (+500)</option>
                                                                <option value="298">Faroe Islands (+298)</option>
                                                                <option value="679">Fiji (+679)</option>
                                                                <option value="358">Finland (+358)</option>
                                                                <option value="33">France (+33)</option>
                                                                <option value="594">French Guiana (+594)</option>
                                                                <option value="689">French Polynesia (+689)</option>
                                                                <option value="241">Gabon (+241)</option>
                                                                <option value="220">Gambia (+220)</option>
                                                                <option value="7880">Georgia (+7880)</option>
                                                                <option value="49">Germany (+49)</option>
                                                                <option value="233">Ghana (+233)</option>
                                                                <option value="350">Gibraltar (+350)</option>
                                                                <option value="30">Greece (+30)</option>
                                                                <option value="299">Greenland (+299)</option>
                                                                <option value="1473">Grenada (+1473)</option>
                                                                <option value="590">Guadeloupe (+590)</option>
                                                                <option value="671">Guam (+671)</option>
                                                                <option value="502">Guatemala (+502)</option>
                                                                <option value="224">Guinea (+224)</option>
                                                                <option value="245">Guinea - Bissau (+245)</option>
                                                                <option value="592">Guyana (+592)</option>
                                                                <option value="509">Haiti (+509)</option>
                                                                <option value="504">Honduras (+504)</option>
                                                                <option value="852">Hong Kong (+852)</option>
                                                                <option value="36">Hungary (+36)</option>
                                                                <option value="354">Iceland (+354)</option>
                                                                <option value="91" selected>+91</option>
                                                                <option value="62">Indonesia (+62)</option>
                                                                <option value="98">Iran (+98)</option>
                                                                <option value="964">Iraq (+964)</option>
                                                                <option value="353">Ireland (+353)</option>
                                                                <option value="972">Israel (+972)</option>
                                                                <option value="39">Italy (+39)</option>
                                                                <option value="1876">Jamaica (+1876)</option>
                                                                <option value="81">Japan (+81)</option>
                                                                <option value="962">Jordan (+962)</option>
                                                                <option value="7">Kazakhstan (+7)</option>
                                                                <option value="254">Kenya (+254)</option>
                                                                <option value="686">Kiribati (+686)</option>
                                                                <option value="850">Korea North (+850)</option>
                                                                <option value="82">Korea South (+82)</option>
                                                                <option value="965">Kuwait (+965)</option>
                                                                <option value="996">Kyrgyzstan (+996)</option>
                                                                <option value="856">Laos (+856)</option>
                                                                <option value="371">Latvia (+371)</option>
                                                                <option value="961">Lebanon (+961)</option>
                                                                <option value="266">Lesotho (+266)</option>
                                                                <option value="231">Liberia (+231)</option>
                                                                <option value="218">Libya (+218)</option>
                                                                <option value="417">Liechtenstein (+417)</option>
                                                                <option value="370">Lithuania (+370)</option>
                                                                <option value="352">Luxembourg (+352)</option>
                                                                <option value="853">Macao (+853)</option>
                                                                <option value="389">Macedonia (+389)</option>
                                                                <option value="261">Madagascar (+261)</option>
                                                                <option value="265">Malawi (+265)</option>
                                                                <option value="60">Malaysia (+60)</option>
                                                                <option value="960">Maldives (+960)</option>
                                                                <option value="223">Mali (+223)</option>
                                                                <option value="356">Malta (+356)</option>
                                                                <option value="692">Marshall Islands (+692)</option>
                                                                <option value="596">Martinique (+596)</option>
                                                                <option value="222">Mauritania (+222)</option>
                                                                <option value="269">Mayotte (+269)</option>
                                                                <option value="52">Mexico (+52)</option>
                                                                <option value="691">Micronesia (+691)</option>
                                                                <option value="373">Moldova (+373)</option>
                                                                <option value="377">Monaco (+377)</option>
                                                                <option value="976">Mongolia (+976)</option>
                                                                <option value="1664">Montserrat (+1664)</option>
                                                                <option value="212">Morocco (+212)</option>
                                                                <option value="258">Mozambique (+258)</option>
                                                                <option value="95">Myanmar (+95)</option>
                                                                <option value="264">Namibia (+264)</option>
                                                                <option value="674">Nauru (+674)</option>
                                                                <option value="977">Nepal (+977)</option>
                                                                <option value="31">Netherlands (+31)</option>
                                                                <option value="687">New Caledonia (+687)</option>
                                                                <option value="64">New Zealand (+64)</option>
                                                                <option value="505">Nicaragua (+505)</option>
                                                                <option value="227">Niger (+227)</option>
                                                                <option value="234">Nigeria (+234)</option>
                                                                <option value="683">Niue (+683)</option>
                                                                <option value="672">Norfolk Islands (+672)</option>
                                                                <option value="670">Northern Marianas (+670)</option>
                                                                <option value="47">Norway (+47)</option>
                                                                <option value="968">Oman (+968)</option>
                                                                <option value="680">Palau (+680)</option>
                                                                <option value="507">Panama (+507)</option>
                                                                <option value="675">Papua New Guinea (+675)</option>
                                                                <option value="595">Paraguay (+595)</option>
                                                                <option value="51">Peru (+51)</option>
                                                                <option value="63">Philippines (+63)</option>
                                                                <option value="48">Poland (+48)</option>
                                                                <option value="351">Portugal (+351)</option>
                                                                <option value="1787">Puerto Rico (+1787)</option>
                                                                <option value="974">Qatar (+974)</option>
                                                                <option value="262">Reunion (+262)</option>
                                                                <option value="40">Romania (+40)</option>
                                                                <option value="7">Russia (+7)</option>
                                                                <option value="250">Rwanda (+250)</option>
                                                                <option value="378">San Marino (+378)</option>
                                                                <option value="239">Sao Tome &amp; Principe (+239)</option>
                                                                <option value="966">Saudi Arabia (+966)</option>
                                                                <option value="221">Senegal (+221)</option>
                                                                <option value="381">Serbia (+381)</option>
                                                                <option value="248">Seychelles (+248)</option>
                                                                <option value="232">Sierra Leone (+232)</option>
                                                                <option value="65">Singapore (+65)</option>
                                                                <option value="421">Slovak Republic (+421)</option>
                                                                <option value="386">Slovenia (+386)</option>
                                                                <option value="677">Solomon Islands (+677)</option>
                                                                <option value="252">Somalia (+252)</option>
                                                                <option value="27">South Africa (+27)</option>
                                                                <option value="34">Spain (+34)</option>
                                                                <option value="94">Sri Lanka (+94)</option>
                                                                <option value="290">St. Helena (+290)</option>
                                                                <option value="1869">St. Kitts (+1869)</option>
                                                                <option value="1758">St. Lucia (+1758)</option>
                                                                <option value="249">Sudan (+249)</option>
                                                                <option value="597">Suriname (+597)</option>
                                                                <option value="268">Swaziland (+268)</option>
                                                                <option value="46">Sweden (+46)</option>
                                                                <option value="41">Switzerland (+41)</option>
                                                                <option value="963">Syria (+963)</option>
                                                                <option value="886">Taiwan (+886)</option>
                                                                <option value="7">Tajikstan (+7)</option>
                                                                <option value="66">Thailand (+66)</option>
                                                                <option value="228">Togo (+228)</option>
                                                                <option value="676">Tonga (+676)</option>
                                                                <option value="1868">Trinidad &amp; Tobago (+1868)</option>
                                                                <option value="216">Tunisia (+216)</option>
                                                                <option value="90">Turkey (+90)</option>
                                                                <option value="7">Turkmenistan (+7)</option>
                                                                <option value="993">Turkmenistan (+993)</option>
                                                                <option value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                                                <option value="688">Tuvalu (+688)</option>
                                                                <option value="256">Uganda (+256)</option>
                                                                {/* <!-Code="GB" value="44">UK (+44)</option> --> */}
                                                                <option value="380">Ukraine (+380)</option>
                                                                <option value="971">United Arab Emirates (+971)</option>
                                                                <option value="598">Uruguay (+598)</option>
                                                                {/* <!-Code="US" value="1">USA (+1)</option> --> */}
                                                                <option value="7">Uzbekistan (+7)</option>
                                                                <option value="678">Vanuatu (+678)</option>
                                                                <option value="379">Vatican City (+379)</option>
                                                                <option value="58">Venezuela (+58)</option>
                                                                <option value="84">Vietnam (+84)</option>
                                                                <option value="84">Virgin Islands - British (+1284)</option>
                                                                <option value="84">Virgin Islands - US (+1340)</option>
                                                                <option value="681">Wallis &amp; Futuna (+681)</option>
                                                                <option value="969">Yemen (North)(+969)</option>
                                                                <option value="967">Yemen (South)(+967)</option>
                                                                <option value="260">Zambia (+260)</option>
                                                                <option value="263">Zimbabwe (+263)</option>

                                                            </select>
                                                            <input type="text" placeholder='Mobile No.' className='w-100 me-2' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footers d-flex justify-content-center">
                                                    <button type='submit' class="theme-bg fs-5"><RiSendPlaneFill className='me-2'></RiSendPlaneFill>Send Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
