import './App.css';
import Header from './components/Header';

import { Container, Content } from './appStyled';
import { useEffect, useState } from 'react';
import avatar1 from './assets/images/avataaars (2).png';
import avatar from './assets/images/avataaars (1).png';
import ecommerceimg from './assets/images/novo.png';
import trybewalletimg from './assets/images/trybewallet.png';
import facebookimg from './assets/images/facebook.png';
import starwarsimg from './assets/images/starwars.png';
import appdereceitasimg from './assets/images/apdeReceitas.png';
import strangerThingsImg from './assets/images/strangerthings.png';

import ParticlesBg from 'particles-bg';
import PortiCards from './components/PortiCard';
import Modal from './components/Modal';
import SkillItem from './components/SkillItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
  const [over, setOver] = useState(true);
  const [display, setDisplay] = useState(false);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const scroolListener = () => {
      if (window.scrollY > 10) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    };
    window.addEventListener('scroll', scroolListener);
  }, []);
  return (
    <Container>
      <Header display={display} />
      <Content>
        <div id='home'>
          <h1>BEM VINDO AO MEU PORTIFÓLIO</h1>
          <h2>MATEUS COURY || PROGRAMADOR FULL STACK</h2>
          <div
            id='areaImageProg'
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
          >
            {over ? <img src={avatar} /> : <img src={avatar1} />}
          </div>
        </div>

        <div id='about'>
          <div id='insideContainer'>
            <div id='left'>
              <SkillItem name='HTML' percent={80} />
              <SkillItem name='CSS' percent={60} />
              <SkillItem name='JAVASCRIPT' percent={80} />
              <SkillItem name='REACT' percent={60} />
              <SkillItem name='NODE' percent={60} />
              <SkillItem name='SOCKET' percent={60} />
              <SkillItem name='MONGODB' percent={70} />
              <SkillItem name='MYSQL' percent={70} />
            </div>
            <div id='right'>
              <div>
                <h1>ABOUT ME</h1>
                <img src='https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.6435-9/44129348_2268742229863973_6232634099303972864_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=81nfICSzQwsAX9CKr-I&tn=hc_4G1-kLqvEcvBh&_nc_ht=scontent.fbhz8-1.fna&oh=d8449ebaf84f2b557465e2f6463c5428&oe=612D8F0D' />
              </div>
              <div>
                <p>
                  Meu nome é Mateus Coury Ribeiro.Sou formado em Teconologias de Jogos
                  Digitais pela Universidade FUMEC e estudante de desenvolvimento de
                  softwares na Trybe!! A cada dia busco fazer de mim uma pessoa melhor que
                  ontem e levo como príncipio sempre me desenvolver tanto tecnicamente
                  como socialmente a fim de me tornar um profissional competente na área
                  de tecnologia!!No tempo livre gosto de ver uma série da netflix tv,tocar
                  piano ou fazer alguma arte nos softwares de 3D.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='portifolio'>
          <h1>Clique em cima para detalhes...</h1>
          <div id='gridContainer'>
            <PortiCards
              setVisible={setVisible}
              image={ecommerceimg}
              className='cards'
              setData={setData}
              rota={'https://mateuscoury.github.io/ecommercetrybe/#/'}
              name='E-COMERCE TRYBE'
              desc={
                'projeto front-end da Trybe com react material ui e outros que teve como objetivo contruir um e-commerce.ele se conecta a api do mercado livre e permite filtrar por categoria pesquisar por item e outras coisas'
              }
            />
            <PortiCards
              setVisible={setVisible}
              rota={'https://portfolios-eeb4a.web.app/comidas'}
              image={appdereceitasimg}
              className='cards'
              setData={setData}
              name='Projeto App de Receitas'
              desc={
                'Projeto em grupo da Trybe usando React,Bootstrap,RTL e outros com o intuito de desenvolver um aplicativo de busca de receitas de comida e bebidas.'
              }
            />
            <PortiCards
              setVisible={setVisible}
              rota={'https://mateuscoury.github.io/trybewallet/'}
              image={trybewalletimg}
              className='cards'
              setData={setData}
              name='Trybe wallet'
              desc={
                'projeto  front-end da Trybe com react material ui e outros que teve como objetivo contruir um e-commerce.ele se conecta a api do mercado livre e permite filtrar por categoria pesquisar por item e outras coisas'
              }
            />

            <PortiCards
              setVisible={setVisible}
              image={facebookimg}
              name='FACEBOOK'
              className='cards'
              setData={setData}
              rota={'https://mateuscoury.github.io/facebook-project/'}
              desc={
                'Projeto da Trybe cujo objetivo foi colocar em prática o uso do flexbox e também da biblioteca bulma para estilização de alguns componentes para fazer um clone da página inicial do Facebook.'
              }
            />
            <PortiCards
              setVisible={setVisible}
              image={starwarsimg}
              name='STAR WARS DATABASE'
              className='cards'
              setData={setData}
              rota={'https://mateuscoury.github.io/starwarsdatab/'}
              desc={
                'Projeto da Trybe com o objetivo de criar um aplicação de pesquisa de planetas do universo de star wars para resgatar detalhes dos mesmos.É possível adicionar filtros de acordo com as informacoes disponiveis.'
              }
            />
            <PortiCards
              setVisible={setVisible}
              image={strangerThingsImg}
              name='Projeto Stranger Things'
              className='cards'
              setData={setData}
              rota={'https://mateuscoury-ft.herokuapp.com/'}
              desc={
                'Projeto da Trybe baseado na série stranger things utilizando React,Node e com deploy no Heroku cuja finalidade é mostrar a situação de cada personagem na série.'
              }
            />
          </div>
        </div>
        <div id='contato'>
          <h1>CONTATOS :</h1>
          <div>
            <a href='https://www.linkedin.com/in/mateus-coury-90463a163/'>
              <LinkedInIcon style={{ fontSize: 90 }} />
            </a>
            <a href='https://github.com/mateuscoury'>
              <GitHubIcon style={{ fontSize: 90 }} />
            </a>
          </div>
        </div>
      </Content>
      <ParticlesBg type='cobweb' bg={true} />
      {visible && <Modal data={data} setVisible={setVisible} />}
    </Container>
  );
}

export default App;
