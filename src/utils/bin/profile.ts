import config from '../../../config.json';

const profile = async (args: string[]): Promise<string> => {
  if (config.ascii === 'yudi') {
    return ` 
    
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ ██╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗██║
███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║╚═╝
██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝██╗
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝

    XXXX                        XXXX                  my profile summary
      XXXX                    XXXX                   -----------
        XXXX                XXXX                      ABOUT
          XXXX            XXXX                        ${config.name}
            XXXX        XXXX                         ﰩ ${config.ps1_hostname}
              XXXX    XXXX                            <u><a href="${config.gui_site}" target="_blank">Graphical Version Website</a></u>
                XXXXXXXX                             爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
              XXXX    XXXX                           -----------
            XXXX        XXXX                          CONTACT 
          XXXX            XXXX                        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
        XXXX                XXXX                      <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
      XXXX                    XXXX                    <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    XXXX                        XXXX                 -----------
                                                      DONATE 
                                                      - Hedera Wallet: 0.0.3305283-hhmsi
                                                      - Ethereum Wallet: 0x224F597aabAcB821e96F0dd0E703175ebC9C


`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  profile
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             DONATE 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                - Hedera Wallet: 0.0.3305283-hhmsi
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   - Ethereum Wallet: 0x224F597aabAcB821e96F0dd0E703175ebC9CfcDC

`;
  }
};

export default profile;
