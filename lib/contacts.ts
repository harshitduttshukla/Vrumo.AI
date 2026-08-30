export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  phoneRaw: string;
  telHref: string;
  email: string;
  mailtoHref: string;
}

export const contacts: { divyaman: ContactPerson; harshit: ContactPerson } = {
  divyaman: {
    name: 'Divyaman Pal',
    role: 'Sales & Partnerships',
    phone: '+91 63886 76760',
    phoneRaw: '+916388676760',
    telHref: 'tel:+916388676760',
    email: 'divyamanpal490@gmail.com',
    mailtoHref: 'mailto:divyamanpal490@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry',
  },
  harshit: {
    name: 'Harshit Shukla',
    role: 'Product & Technology',
    phone: '+91 63882 93612',
    phoneRaw: '+916388293612',
    telHref: 'tel:+916388293612',
    email: 'harshitshukla6388@gmail.com',
    mailtoHref: 'mailto:harshitshukla6388@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry',
  },
};

export const primaryBookingEmail = contacts.divyaman.mailtoHref;
export const primaryBookingUrl = '/contact';
