
const strapiPrimaryButtonStyle = `
  background-color: #4945ff; /* buttonPrimary600 */
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.33;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
  box-shadow: 0px 1px 4px rgba(33, 33, 52, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margibn:5.5px 0px 
`;

const strapiPrimaryButtonHoverStyle = `
  background-color: #7b79ff; /* buttonPrimary500 */
`;

const strapiPrimaryButtonFocusStyle = `
  outline: none;
  box-shadow: 0px 0px 0px 2px #4945ff;
`;

export { strapiPrimaryButtonStyle, strapiPrimaryButtonHoverStyle, strapiPrimaryButtonFocusStyle };
