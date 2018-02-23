/**
 * Track the switch from one supplier to another
 * @param {org.capita.SwitchSupplier} event To be processed
 * @transaction
 */
function submitSwitch(event) {
    var ar;
    return getParticipantRegistry('org.capita.PassportAuthority')
          .then(function (assetRegistry) {
           var id = "PassportAdmin"
           ar = assetRegistry;
            return(ar.get(id));
          })
          .then(function(passport){
              if(event.userType === "supplier"){
                  passport.supplierId.push(event.userId);
              }else {
                  passport.consumerId.push(event.userId);
              }
              return ar.update(passport);
          });
  }
  /**
   * Track the switch from one supplier to another
   * @param {org.capita.Registration} event To be processed
   * @transaction
   */
  function userRegistration(event) {
    var ar;
    return getParticipantRegistry('org.capita.PassportAuthority')
          .then(function (assetRegistry) {
           var id = "PassportAdmin"
           ar = assetRegistry;
            return(ar.get(id));
          })
          .then(function(passport){
              if(event.userType === "supplier"){
                  passport.supplierId.push(event.userId);
              }else {
                  passport.consumerId.push(event.userId);
              }
              return ar.update(passport);
          });
  }
  
  