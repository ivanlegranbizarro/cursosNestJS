import { Injectable, PipeTransform } from '@nestjs/common';
import urlSlug from 'url-slug';

@Injectable()
export class SlugPipe implements PipeTransform {
  transform(value: any) {
    return urlSlug(value);
  }
}
