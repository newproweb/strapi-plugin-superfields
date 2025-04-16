import React from "react";
import { Box, Typography, DesignSystemProvider } from "@strapi/design-system";
import { ExclamationMarkCircle, Information, CrossCircle } from "@strapi/icons";

const colors = {
  success: {
    background: "success200",
    icon: Information,
    textColor: "neutral800",
  },
  warning: {
    background: "warning200",
    icon: ExclamationMarkCircle,
    textColor: "neutral800",
  },
  error: {
    background: "danger200",
    icon: CrossCircle,
    textColor: "neutral800",
  },
};

const CommentField = React.forwardRef((props, ref) => {
  const { comment, variant } = props.attribute.options;
  const { background, textColor, icon } = colors[variant];
  return (
    <DesignSystemProvider>
      <Box background={background} padding={4} style={{ borderRadius: "8px" }}>
        {icon({ style: { verticalAlign: "middle" } })}
        <Typography style={{ marginLeft: ".5rem" }} textColor={textColor}>
          {comment}
        </Typography>
      </Box>
    </DesignSystemProvider>
  );
});

export default CommentField;
