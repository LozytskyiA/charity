export const SLIDER_DESCRIPTION = {
  title: "Happy 1st Date.",
  firstLine: " With our",
  secondLine: "compliments.",
  description: {
    tip01: "Date: An opportunity to learn of the other",
    tip05: "Make your why (for a partner) as big as our sun",
    tip10: "Approach the process with patience",
    tip25:
      "Universe gives you what you demand with your actions not with words",
    tip38:
      "Being honest won’t get you many relationships; it will get you invaluable ones",
    girl: "MsMrs App will serve a discerning community of invite-only members, who are searching for romantic companionship. MsMrs App will launch early 2022.",
  },
};

export type TDescription = keyof typeof SLIDER_DESCRIPTION.description;

export const BUTTON_NAMES = {
  headersButtonName: "Get an Invitation",
  formButtonName: "Send an Invitation",
  downloadAppButtonName: "Download an app",
};

export const FOOTER_TEXT = {
  altLogo: "MsMrs Logo",
  logoInfo:
    "We care about helping professionals find romantic companionship with the help of “real dates”.",
  legalTitle: {
    title: "Legal",
    linksNames: {
      personalData: "Personal Data",
      impressum: "Impressum",
    },
  },
  isnstallAppTitle: "Install App",
  copyright:
    "Copyright © 2021 MsMrs Alliance Private Limited. All Rights Reserved.",
};

export const FORM_TEXT = {
  formTitle: "Get an invite",
  formInfo: "Enter your details below",
  lablePhone: "Mobile Number",
  lableCity: "Home City",
  buttonText: "Send an Invitation",
  warnings: {
    phoneWarning: "Please enter a correct mobile number",
    cityWarning: "Please select our service area",
  },
  successfullyAdded: "Thank you. Your details have been successfully added",
  cities: [
    {
      id: "0",
      name: "Please select our service area",
    },
    {
      id: "1",
      name: "Mumbai",
    },
    {
      id: "2",
      name: "Delhi",
    },
    {
      id: "3",
      name: "Bangalore",
    },
  ],
};

export const HEADER_ALT = {
  headerLogo: "MsMrs Logo",
  burgerMenu: "burger menu",
};

export const MAIN_CONTENT = {
  altHappyPeople: "Our Community of Professionals",
};

export const PERSONAL_DATA = {
  title: "Personal Data Protection and Privacy",
  paragraphsBeforeList: [
    "Company represents that it will keep your personal data, received through the MsMrs App, confidential.",
    "Company further represents that it will use technical and organizational measures, commensurate with the risk associated with a breach of such personal data to ensure the security and confidentiality of your personal data in order to prevent, among other things,",
  ],
  paragraphsAfterList: [
    "Company, including its representatives, shall view and process your personal data only on a need-to-know basis and only to the extent necessary.",
    "The security measures taken by Company shall be commensurate with the risks represented by the processing and the nature of your personal data to be processed, taking into consideration the state-of-the-art security measures available to protect such data and the implementation costs of such measures.",
    "“Personal Data” means any information relating to an identified or identifiable natural person; “Your Personal Data” includes any Personal Data obtained by Company from You, any Personal Data being processed by Company on your behalf; and “Processing” includes any operation or set of operations performed upon Personal Data, such as collection, recording, organization, storage, adaptation, alteration, retrieval, accessing, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, combination, blocking, erasure, or destruction.",
  ],
  list: [
    "(a) accidental, unauthorized or unlawful destruction, modification, disclosure, access or loss of such Data;",
    "(b) accidental, unauthorized or unlawful disclosure or access to your personal data;",
    "or (c) unlawful forms of Processing.",
  ],
};

export const IMPRESSUM = {
  title: "Impressum",
  paragraphs: [
    "The MsMrs App of MsMrs Alliance Private Limited cares about helping young professionals find romantic companionship.",
    "This website is owned and managed by passionate, warm, and hospitable representatives of MsMrs Alliance Private Limited, a non-government company, incorporated and governed by the provisions of the Indian Companies Act, 2013, having its registered office at 108/1 Anandapur, Kasba, Kolkata, 700-107, West Bengal, India.",
    "The Company’s Corporate Identification Number (CIN) is U55209WB2019PTC235070.",
    "It was incorporated on December 3, 2019. Directors of the Company are Vedang Khetawat (DIN #06774506) and Varun Khetawat (DIN #02177771).",
    "Company director, Vedang Khetawat, profile is presented here for your reference:",
  ],
  impressumLinksName: [
    {
      name: "Forbes",
      link: "https://www.forbesindia.com/article/brand-connect/meet-entrepreneur-and-filmmaker-vedang-khetawat/61673/1",
    },
    {
      name: "Marwar",
      link: "https://www.marwar.com/meet-the-next-generation-of-the-khetawat-clan/",
    },
  ],
};

export const SEO_PAGES = {
  index: {
    title: "Charity | Be Kind",
    description: "Charity, Be Kind",
  },
  error: {
    title: "Not Found",
  },
};
