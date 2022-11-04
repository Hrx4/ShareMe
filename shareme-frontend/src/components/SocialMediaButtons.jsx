import { Tooltip } from "@mui/material";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const SocialMediaButtons = ({ url }) => {
  // const currentUrl = window.location.href; // Get current url
  let currentUrl = "https://share-me-web.netlify.app/login";
  if (url) {
    currentUrl = url;
  }
  // console.log(currentUrl);

  return (
    // Send all buttons to bottom right
    <div className="flex items-end justify-center mb-5 mt2 gap-3">
      <Tooltip title="Facebook" placement="top">
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon
            size={48}
            round={true}
            title="ShareMe - Next Gen Social Media Website"
          />
        </FacebookShareButton>
      </Tooltip>

      <Tooltip title="Twitter" placement="top">
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon
            size={48}
            round={true}
            title="ShareMe - Next Gen Social Media Website"
          />
        </TwitterShareButton>
      </Tooltip>

      <Tooltip title="Whatsapp" placement="top">
        <WhatsappShareButton url={currentUrl}>
          <WhatsappIcon
            size={48}
            round={true}
            title="ShareMe - Next Gen Social Media Website"
          />
        </WhatsappShareButton>
      </Tooltip>

      <Tooltip title="Linkedin" placement="top">
        <LinkedinShareButton url={currentUrl}>
          <LinkedinIcon
            size={48}
            round={true}
            title="ShareMe - Next Gen Social Media Website"
          />
        </LinkedinShareButton>
      </Tooltip>

      <Tooltip title="Reddit" placement="top">
        <RedditShareButton url={currentUrl}>
          <RedditIcon
            size={48}
            round={true}
            title="ShareMe - Next Gen Social Media Website"
          />
        </RedditShareButton>
      </Tooltip>

      <Tooltip title="Telegram" placement="top">
        <TelegramShareButton url={currentUrl}>
          <TelegramIcon
            size={48}
            round={true}
            title="ShareMe - Next Gen Social Media Website"
          />
        </TelegramShareButton>
      </Tooltip>
    </div>
  );
};

export default SocialMediaButtons;
