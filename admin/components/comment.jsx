import React from "react";
import { Box, Typography, DesignSystemProvider } from "@strapi/design-system";
import { Information, CrossCircle } from "@strapi/icons";
import MarkCircle from "./icons/MarkCircle";

const colors = {
  success: {
    background: "success200",
    Icon: Information,
    textColor: "neutral800",
  },
  warning: {
    background: "warning200",
    Icon: MarkCircle,
    textColor: "neutral800",
  },
  error: {
    background: "danger200",
    Icon: CrossCircle,
    textColor: "neutral800",
  },
};

const CommentField = React.forwardRef((props, ref) => {
  const { comment, variant } = props.attribute.options;
  const { background, textColor, Icon } = colors[variant];
  return (
    <DesignSystemProvider>
      <Box
        background={background}
        padding={4}
        style={{ borderRadius: "8px", display: "flex", alignItems: "center" }}
        ref={ref}
      >
        {Icon ? <Icon style={{ verticalAlign: "middle" }} /> : ""}
        <Typography style={{ marginLeft: ".5rem" }} textColor={textColor}>
          {comment}
        </Typography>
      </Box>
    </DesignSystemProvider>
  );
});

export default CommentField;
