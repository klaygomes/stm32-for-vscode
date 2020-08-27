import { workspace } from 'vscode';

import { merge } from 'lodash';

import { Configuration } from './Types'

export function getWorkspaceConfiguration(override?: Configuration): Configuration {
  const rawConfiguration = workspace.getConfiguration('stm32-for-vscode');
  const workspaceConfig = {
    openocd: {
      path: rawConfiguration.openocdPath,
      options: {
        file: [rawConfiguration['openocd-programmer']]
      }
    },
    gcc: {
      path: rawConfiguration.armToolchainPath
    },
    make: {
      path: rawConfiguration.makePath || rawConfiguration.cmakePath
    }
  }
  return merge(workspaceConfig, override)
}
