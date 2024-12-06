'use client'
import React from 'react'
import {Dialog, DialogOverlay, DialogContent, DialogTitle} from '../Dialog'
import Button from '../Button'
import type {EditRoleDialogProps} from './types'
import classNames from './EditRoleDialog.module.css'

const EditRoleDialog = ({role, onSave, open, onOpenChange}: EditRoleDialogProps) => {
  const [newName, setNewName] = React.useState(role.name)

  const handleSave = event => {
    event.preventDefault()
    if (!role.id) {
      console.error('Missing role ID! Cannot save.')
      return
    }
    // console.log('Saving role with ID:', role.id, 'and name:', newName)
    onSave({...role, name: newName})
  }
  const handleCancel = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay />
      <div className={classNames.ScrollPadding}>
        <DialogContent style={{maxWidth: '488px'}} showCloseButton={false}>
          <form onSubmit={handleSave}>
            <DialogTitle>Edit Role</DialogTitle>
            <div style={{marginBottom: '1rem'}}>
              <label htmlFor="roleName" style={{display: 'block', marginBottom: '0.5rem'}}>
                Role Name
              </label>
              <input
                id="roleName"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                className={classNames.Input}
                required
              />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)'}}>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type="submit" className={classNames.DangerButton} color="purple">
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  )
}

export default EditRoleDialog
