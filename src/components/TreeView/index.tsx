import React from 'react'
import { styled } from '@material-ui/core/styles'
import { fade, makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem'
import Collapse from '@material-ui/core/Collapse'
import Box from '@material-ui/core/Box'
import Text from '@material-ui/core/Typography'
import { TransitionProps } from '@material-ui/core/transitions'
import Button from '@material-ui/core/Button'

import { FlexFill, Flex } from 'styles'
import palette from 'styles/palette'
import { HOVER } from 'helpers/constant'

import Dropdown from 'components/Dropdown'
import List from 'components/List'
import TooltipImage from 'components/TooltipImage'

//TODO! NEED FULLL REFACTORING AND DECOMPOSITION BY COMPONENTS

function MinusSquare() {
  return <img style={{ transform: 'rotateX(0.5turn)' }} src={require('../../assets/icons/arrow.svg')} />
}

function PlusSquare() {
  return <img src={require('../../assets/icons/arrow.svg')} />
}

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:focus > $content, &$selected > $content': {
        backgroundColor: '#F2EEFC',
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent !important',
      },
    },
    content: {
      backgroundColor: '#F2EEFC',
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 12,
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dashed #E9E9E9`,
      backgroundColor: 'white',
      'MuiCollapse-wrapperInner div:last-child': {
        borderBottom: 'none',
      },
    },
    expanded: {},
    selected: {},
    label: {
      '&:hover': {
        backgroundColor: '#F2EEFC',
      },
    },
    labelRoot: {
      alignItems: 'center',
      justifyContent: 'space-between',
      '&:hover': {
        '& > div': {
          opacity: 1,
        },
      },
    },
    iconContainer: {
      paddingLeft: 15,
    },
    labelIcon: {},
    labelText: {},
    labelInfo: {
      color: palette.primary.main,
    },
  })
)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'white',
    },
    content: {
      marginTop: 10,
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: 12,
      backgroundColor: '#F2EEFC',
    },
  })
)

type StyledTreeItemProps = TreeItemProps & {
  // bgColor?: string;
  // color?: string;
  labelText: string
  labelInfo?: string
}

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles()
  const { label, labelText, labelInfo, color, ...other } = props

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <TreeItem
      label={
        <FlexFill className={classes.labelRoot}>
          <Text className={classes.labelText}>{labelText}</Text>
          <Flex /* opacity={0} */ alignItems="center">
            <Text className={classes.labelInfo}>{labelInfo}</Text>
            <Button variant="contained" onClick={onClick}>
              Добавить сервис
            </Button>
          </Flex>
        </FlexFill>
      }
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
        iconContainer: classes.iconContainer,
      }}
      {...other}
    />
  )
}

const ServiceTypeBox = styled('li')({
  paddingTop: 15,
  paddingBottom: 15,
  paddingRight: 30,
  borderBottom: '1px solid #E9E9E9',
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'space-between',
  [HOVER]: {
    '#more-info': {
      opacity: 1,
    },
    p: {
      color: palette.primary.main,
    },
  },
})

const TreeStruc = () => {
  const classes = useStyles()

  const getServiceIcon = ({ isDigital, status }: typeof testTree.serviceTypes[0]) => {
    const icons: { [key: string]: string } = {
      isDigital_Active: require('../../assets/icons/digital_active.svg'),
      isDigital_Inactive: require('../../assets/icons/digital_inactive.svg'),
      isNodigital_Active: require('../../assets/icons/nodigital_active.svg'),
      isNodigital_Inactive: require('../../assets/icons/nodigital_inactive.svg'),
    }
    const type = isDigital ? 'isDigital_' : 'isNodigital_'
    return icons[type + status]
  }

  const renderTree = (nodes: typeof testTree) => {
    const { department, children, serviceTypes } = nodes
    return (
      <StyledTreeItem
        key={department.uid}
        nodeId={department.uid}
        labelText={department.title}
        labelInfo={`Cотрудники: ${(Number(Math.random()) * 100).toFixed(0)}`}
      >
        <List>
          {serviceTypes.length
            ? serviceTypes.map(service => {
                const isActive = service.status === 'Active'
                return (
                  <ServiceTypeBox key={service.id}>
                    <Flex alignItems="center">
                      <img src={getServiceIcon(service)} />
                      {/* <Text color={isActive ? palette.black : palette.blackAlt2} key={service.id}>
                        {service.title}
                      </Text> */}
                    </Flex>
                    <Flex id="more-info" /* opacity={0} */ alignItems="center">
                      {[department.primaryManager, ...department.secondaryManagers].map(manager => {
                        return (
                          <Box key={manager.uid} mr={8}>
                            <TooltipImage
                              title={`${manager.lastName} ${manager.firstName}`}
                              src={require('../../assets/images/avatar.png')}
                            />
                          </Box>
                        )
                      })}
                      <Box ml={0}>
                        <Dropdown
                          icon
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                          menuItems={[
                            {
                              text: 'Редактировать',
                              icon: require('../../assets/icons/edit.svg'),
                              onClick: () => console.log('Сводка'),
                            },
                            {
                              text: 'Приостановить',
                              icon: require('../../assets/icons/pause.svg'),
                              onClick: () => console.log('Цифровые сервисы'),
                            },
                            {
                              text: 'Архивировать',
                              icon: require('../../assets/icons/zip.svg'),
                              onClick: () => console.log('Архив'),
                            },
                            {
                              text: 'Удалить',
                              icon: require('../../assets/icons/delete.svg'),
                              onClick: () => console.log('Архив'),
                            },
                          ]}
                        />
                      </Box>
                    </Flex>
                  </ServiceTypeBox>
                )
              })
            : null}
        </List>
        {children.length ? children.map(node => renderTree(node)) : null}
      </StyledTreeItem>
    )
  }

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={[testTree.department.uid]}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
    >
      {renderTree(testTree)}
    </TreeView>
  )
}

export default TreeStruc

const testTree = {
  department: {
    uid: '5ea18d12a26918e87ed0c51e',
    title: 'Xth',
    primaryManager: {
      uid: '5ea18d121006635163b56837',
      firstName: 'Frazier',
      middleName: 'Alvarado',
      lastName: 'Bentley',
      avatarUrl: 'http://placehold.it/32x32',
    },
    secondaryManagers: [
      {
        uid: '5ea18d1295c60e73020cc4a7',
        firstName: 'Murray',
        middleName: 'Molina',
        lastName: 'Sims',
        avatarUrl: 'http://placehold.it/32x32',
      },
    ],
  },
  children: [
    {
      department: {
        uid: '5ea18d1264b2e81f55e42b79',
        title: 'Confrenzy',
        primaryManager: {
          uid: '5ea18d12fe4e2d43da4f4634',
          firstName: 'Brandi',
          middleName: 'Kirk',
          lastName: 'Jacobson',
          avatarUrl: 'http://placehold.it/32x32',
        },
        secondaryManagers: [
          {
            uid: '5ea18d12d6017aa4d763d1c8',
            firstName: 'Isabelle',
            middleName: 'Kline',
            lastName: 'Winters',
            avatarUrl: 'http://placehold.it/32x32',
          },
        ],
      },
      children: [
        {
          department: {
            uid: '5ea18d12cad61d81786c4b86',
            title: 'Repetwire',
            primaryManager: {
              uid: '5ea18d124e43c209706165da',
              firstName: 'Eliza',
              middleName: 'Norman',
              lastName: 'Andrews',
              avatarUrl: 'http://placehold.it/32x32',
            },
            secondaryManagers: [
              {
                uid: '5ea18d129216cd9b4c6118b6',
                firstName: 'Erna',
                middleName: 'Mathis',
                lastName: 'Myers',
                avatarUrl: 'http://placehold.it/32x32',
              },
            ],
          },
          children: [
            {
              department: {
                uid: '5ea18d127eac52ebf3871b80',
                title: 'Zanity',
                primaryManager: {
                  uid: '5ea18d12c027aa0df09cec10',
                  firstName: 'Shanna',
                  middleName: 'Dyer',
                  lastName: 'Ruiz',
                  avatarUrl: 'http://placehold.it/32x32',
                },
                secondaryManagers: [
                  {
                    uid: '5ea18d12f988948f696749bc',
                    firstName: 'Mccarty',
                    middleName: 'Gonzalez',
                    lastName: 'Decker',
                    avatarUrl: 'http://placehold.it/32x32',
                  },
                ],
              },
              children: [],
              serviceTypes: [
                {
                  id: '5ea18d121644e6a5497bcda7',
                  title: 'Orbixtar',
                  departmentUid: '5ea18d1279ec9b65111e9c38',
                  status: 'Inactive',
                  isDigital: false,
                },
                {
                  id: '5ea18d12d18e34f6224769fc',
                  title: 'Zentia',
                  departmentUid: '5ea18d128f6598f70eaee727',
                  status: 'Active',
                  isDigital: true,
                },
                {
                  id: '5ea18d12142e86235a2891f6',
                  title: 'Enersave',
                  departmentUid: '5ea18d122b960c726d43e7f2',
                  status: 'Active',
                  isDigital: false,
                },
                {
                  id: '5ea18d124354c86c71244faa',
                  title: 'Kindaloo',
                  departmentUid: '5ea18d12fce7714bcd6c8158',
                  status: 'Active',
                  isDigital: true,
                },
              ],
            },
          ],
          serviceTypes: [
            {
              id: '5ea18d120f562c2e61520424',
              title: 'Zeam',
              departmentUid: '5ea18d1245cbb0131370f94a',
              status: 'Active',
              isDigital: true,
            },
            {
              id: '5ea18d1249d53f74a12993a6',
              title: 'Ecolight',
              departmentUid: '5ea18d12668dc678eacad118',
              status: 'Active',
              isDigital: true,
            },
          ],
        },
      ],
      serviceTypes: [
        {
          id: '5ea18d12e3eb2180e57ea3d9',
          title: 'Comtrail',
          departmentUid: '5ea18d12064caf1b0a45c8c1',
          status: 'Active',
          isDigital: false,
        },
      ],
    },
  ],
  serviceTypes: [
    {
      id: '5ea18d126c3fd253850b8c2e',
      title: 'Euron',
      departmentUid: '5ea18d123571522d5c96b724',
      status: 'Inactive',
      isDigital: false,
    },
  ],
}
