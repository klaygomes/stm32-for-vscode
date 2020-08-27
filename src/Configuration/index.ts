
import { Configuration } from './Types'
import { getWorkspaceConfiguration } from './WorkspaceConfiguration'
import { getProjectConfiguration } from './ProjectConfiguration'
import { merge } from 'lodash';

const workspaceConfig = getWorkspaceConfiguration()
const projectConfig = getProjectConfiguration()

export function getConfiguration(override?: Configuration): Configuration {
  return merge(workspaceConfig, projectConfig, override)
}
