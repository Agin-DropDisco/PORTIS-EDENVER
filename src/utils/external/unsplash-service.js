import Unsplash, { toJson }  from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "",
  secret: "",
  callbackUrl: ""
});

export {
  unsplash,
  toJson
};
