import { workspace } from 'vscode';

import { cosmiconfigSync } from 'cosmiconfig';
import { merge } from 'lodash';

import { Configuration } from './Types'


export function getProjectConfiguration(override?: Configuration): Configuration {
  const explorer = cosmiconfigSync('stm32-for-vscode')
  const cosmiconfigResult = explorer.search(workspace.rootPath)
  const projectConfig = cosmiconfigResult?.config || {}
  return merge(projectConfig, override)
}

