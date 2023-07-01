import * as yup from 'yup';

export const postValidationSchema = yup.object().shape({
  content: yup.string().required(),
  image: yup.string(),
  campaign_id: yup.string().nullable(),
});
