import { CampaignInterface } from 'interfaces/campaign';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  content: string;
  image?: string;
  campaign_id?: string;
  created_at?: any;
  updated_at?: any;

  campaign?: CampaignInterface;
  _count?: {};
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  image?: string;
  campaign_id?: string;
}
