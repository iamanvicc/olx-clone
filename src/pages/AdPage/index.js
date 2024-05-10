import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { PageArea, Fake, OthersArea, BreadChumb } from './style';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/mainComponents';
import AdItem from '../../components/partials/AdItem';

const Page = () => {
    const api  = useApi();
    const { id }  = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(()=>{
        const getAdInfo = async(id) => {
            const json = await api.getAd(id, tru);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, []);

    const formateDate = (date) => {
        let cDate = new Date(date);

        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    return (
        <PageContainer>
            {adInfo.category &&
                <BreadChumb>
                    Voce está aqui: 
                    <Link to="/">Home</Link>
                    /
                    <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                    /
                    <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                    /
                     {adInfo.title}
                </BreadChumb>
            }
            
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            Loading && <Fake height={300}/>
                            {adInfo.images &&
                            <Slide>
                                {adInfo.images.map((img, k) => 
                                <div key={k} className="each-slide">
                                    <img src={img} alt="" />
                                </div>
                                )}
                            </Slide>
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                Loading && <Fake height={20}/>
                                {adInfo.title && 
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated && 
                                    <small>Criado em {formateDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                Loading && <Fake height={100}/>
                                {adInfo.decription}
                                <hr/>
                                {adInfo.views && 
                                    <small>Visualizações:{adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="righttSide">
                    <div className="box box--padding">
                        Loading && <Fake height={20}/>
                        {adInfo.priceNegotiable &&
                        "Preço Negociável"}
                        {adInfo.priceNegotiable && adInfo.price &&
                        <div className="price">Preço:<span>R$ {adInfo.price}</span></div>
                        }
                    </div>
                     {Loading && <Fake height={50}/>}
                     {adInfo.userInfo &&
                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="contactSellerLink">Fale com o vendedor</a>
                            <div className="createdBy box box--padding">
                                <strong>{adInfo.userInfo.name}</strong>
                                <small>E-mail: {adInfo.userInfo.email}</small>
                                <smaill>Etado: {adInfo.stateName}</smaill>
                            </div>
                        </>
                     }
                </div>

            </PageArea>
            <OthersArea>  
                {adInfo.othersAds &&
                    <>
                        <h2>Outras ofertas do vendedor</h2>
                        <div className="list">
                            {adInfo.othersAds.map((i,k)=>
                                <AdItem key={k} data={i}/>
                            )}
                        </div>
                    </>   
                }
            </OthersArea>  
        </PageContainer>
    );
}

export default Page;