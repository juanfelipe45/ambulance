import { UserProperties } from './../domain/user';
import { Base } from '../../shared/domain/base.interface';

export interface UserRepository extends Base<UserProperties> {
  execute(): void;
}
